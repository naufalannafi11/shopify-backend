const express = require("express");
const router = express.Router();
const {
  getMe,
  login,
  register,
  refreshToken,
  logout,
} = require("../controller/authController");
const authenticateJWT = require("../middleware/auth");

router.get("/me", authenticateJWT, getMe);

router.post("/login", login);

router.post("/register", register);

router.post("/refreshToken", refreshToken);

router.post("/logout", logout);

module.exports = router;
