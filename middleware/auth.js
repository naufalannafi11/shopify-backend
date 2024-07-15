// middleware/authenticateJWT.js

const jwt = require('jsonwebtoken');
const { Users, BlacklistToken } = require('../models');

const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log('No authorization header');
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    console.log('Token:', token);

    console.log('Checking if token is blacklisted');
    const tokenExists = await BlacklistToken.findOne({ where: { token } });
    if (tokenExists) {
      console.log('Token is blacklisted');
      return res.status(401).json({ message: 'Unauthorized: Youre logged out' });
    }

    // Verify token
    console.log('Verifying token');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    // Ensure decoded token has an id
    if (!decoded.id) {
      console.log('Decoded token does not have an id');
      return res.status(403).json({ message: 'Invalid token: No user id' });
    }

    req.userId = decoded.id;
    console.log('User ID from token:', req.userId);

    const user = await Users.findByPk(req.userId);
    if (!user) {
      console.log('User not found for ID:', req.userId);
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error authenticating token:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Token expired' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token' });
    }
    return res.status(500).json({ message: 'Failed to authenticate token' });
  }
};

module.exports = authenticateJWT;
