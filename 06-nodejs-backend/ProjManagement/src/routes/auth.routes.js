import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import { registerUserValidator, loginValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";

const router = Router();

router.route("/register").post(registerUserValidator(), validate, registerUser);
router.route("/login").post(loginValidator(), validate, login);

export default router;
