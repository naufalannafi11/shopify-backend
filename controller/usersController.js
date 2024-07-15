const { Users } = require('../models');
const argon2 = require("argon2");
const { Addresses } = require("../models");
const { Orders } = require("../models");

module.exports.getUsers = async (req, res) => {
  try {
    const data = await Users.findAll({
      attributes: ["id", "fullName", "email", "birthDate", "phoneNumber"],
      include: [
        {
          model: Addresses,
          as: "Addresses",
        },
        { model: Orders, as: "orders", attributes: ["id", "totalPrice"] },
      ],
    });
    res.status(200).json({ Message: "Get all users success", Users: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const data = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Addresses,
          as: "Addresses",
        },
        { model: Orders, as: "orders", attributes: ["id", "totalPrice"] },
      ],
    });
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ Message: "Get user success", Users: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, password, confirmPassword, birthDate, phoneNumber } =
    req.body;

  try {
    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (email && email !== existingUser.email) {
      const existingEmail = await Users.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email already exists" });
      }
    }

    if (phoneNumber && phoneNumber !== existingUser.phoneNumber) {
      const existingPhoneNumber = await Users.findOne({ phoneNumber });
      if (existingPhoneNumber) {
        return res.status(400).json({ error: "Phone number already exists" });
      }
    }

    if (password && password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password not match" });
    }

    let isPasswordChanged = false;
    if (password) {
      const passwordMatches = await argon2.verify(
        existingUser.password,
        password
      );
      if (!passwordMatches) {
        isPasswordChanged = true;
        const hashedPassword = await argon2.hash(password);
        existingUser.password = hashedPassword;
      }
    }

    const isAnyFieldChanged =
      (fullName && fullName !== existingUser.fullName) ||
      (email && email !== existingUser.email) ||
      (birthDate && birthDate !== existingUser.birthDate) ||
      (phoneNumber && phoneNumber !== existingUser.phoneNumber) ||
      isPasswordChanged;

    if (!isAnyFieldChanged) {
      return res.status(400).json({ error: "No field to update" });
    }

    if (fullName) existingUser.fullName = fullName;
    if (email) existingUser.email = email;
    if (birthDate) existingUser.birthDate = birthDate;
    if (phoneNumber) existingUser.phoneNumber = phoneNumber;

    const updatedUser = await existingUser.save();
    res.status(200).json({ Message: "User updated success", Users: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const data = await Users.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "User deleted success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

