const express = require("express")
const router = express.Router();

const  {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  logout,
} = require("../controllers/authController")

const { authenticateUser} = require("../middleware/authentication")

router
  .post("/register", register)
  .post("/login", login)
  .delete("/logout", authenticateUser,logout)
  .post("/verify-email", verifyEmail)
  .post("/forgot-password",forgotPassword)
  .post("/reset-password", resetPassword);

module.exports = router;
