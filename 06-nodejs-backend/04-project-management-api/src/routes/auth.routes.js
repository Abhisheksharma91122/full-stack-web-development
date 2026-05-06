import { Router } from "express";
import {
  login,
  registerUser,
  logoutUser,
  currentUser,
  verifyEmail,
  refreshAccessToken,
  resendEmailVerification,
  forgotPasswordRequest,
  resetForgotPassword,
  changeCurrentPassword,
} from "../controllers/auth.controllers.js";
import { registerUserValidator, loginValidator, userForgotPasswordValidator, userChangeCurrentPasswordValidator, userResetForgotPasswordValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = Router();

// Public routes
router.route("/register").post(registerUserValidator(), validate, registerUser);
router.route("/login").post(loginValidator(), validate, login);
router.route("/verify-email/:verificationToken").post(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(), validate, resetForgotPassword);

// Secure route
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/current-user").get(verifyJwt, currentUser);
router.route("/resend-email-verification").post(verifyJwt, resendEmailVerification);
router.route("/change-password").post(verifyJwt, userChangeCurrentPasswordValidator(), validate,  changeCurrentPassword);

export default router;
