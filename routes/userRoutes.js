const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSingIn,
  verifyOTP
} = require("../controllers/userController");

//riouter object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/create-user", registerController);

// LOGIN || POST
router.post("/sign-in-user", loginController);

//UPDATE || PUT
router.put("/update-user", requireSingIn, updateUserController);

//VERIFY
router.post( '/verify-otp', verifyOTP);

//export
module.exports = router;
