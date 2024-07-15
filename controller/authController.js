const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const { Users, BlacklistToken } = require("../models");

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

const addToBlacklist = async (token) => {
  await BlacklistToken.create({ token });
};

module.exports.register = async (req, res) => {
  const { fullName, email, password, confirmPassword, birthDate, phoneNumber } =
    req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ error: "Password and confirm password not match" });
  }
  if (!fullName || !email || !password || !birthDate || !phoneNumber) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }
 

  try {
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const existingPhoneNumber = await Users.findOne({ where: { phoneNumber } });
    if (existingPhoneNumber) {
      return res.status(400).json({ error: "Phone number already exists" });
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = await Users.create({
      fullName,
      email,
      password: hashedPassword,
      birthDate,
      phoneNumber,
    });

    const accessToken = generateAccessToken(newUser.id);
    const refreshToken = generateRefreshToken(newUser.id);

    res
      .status(201)
      .json({
        message: "User created successfully",
        accessToken,
        refreshToken,
      });
  } catch (error) {
    console.error("Error registering Users:", error);
    res
      .status(500)
      .json({ message: "Error registering users", error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Users not found" });
    }

    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    res.status(200).json({ message: "Logged in", token, refreshToken });
  } catch (error) {
    console.error("Error logging in users:", error);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports.getMe = async (req, res) => {
    try {
      const user = await Users.findByPk(req.userId, {
        attributes: ['fullName', 'email', 'birthDate', 'phoneNumber'],
      });
      if (!user) {
        console.log('User not found for ID:', req.userId);
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ message: 'Error getting user' });
    }
  };
  
  

module.exports.logout = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    await addToBlacklist(token);
    res.status(200).json({ message: "Logout success" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Error logging out" });
  }
};

module.exports.refreshToken = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token not provided" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const accessToken = generateAccessToken(decoded.id);

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(403).json({ message: "Failed to refresh token" });
  }
};
