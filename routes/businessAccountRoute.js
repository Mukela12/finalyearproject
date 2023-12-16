const express = require("express");
const {
  registerController,
  loginController,
  requireSignIn,
  verifyOTP
} = require("../controllers/businessAccountController");

// Router object
const router = express.Router();

// Routes
// REGISTER || POST
router.post("/create-business-user", registerController);

// LOGIN || POST
router.post("/sign-in-business", loginController);

// VERIFY OTP || POST
router.post("/verify-otp", verifyOTP);

// Export
module.exports = router;
