const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// **** SignUp ****
router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signUp));

// **** Login ****
router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

// **** Logout ****
router.get("/logout", userController.logout);

module.exports = router;
