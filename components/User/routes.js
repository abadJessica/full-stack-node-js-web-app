import express from "express";
const router = express.Router();

import userController from "./controller.js";

// /user (account page)
router.get("/user", userController.getUser);

// /login
router.get("/login", userController.loginForm);

// login form submit
router.post("/login", userController.login);

// /logout
router.get("/logout", userController.logout);

export default router;