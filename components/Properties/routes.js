import express from "express";
import propertyController from "./controller.js";

const router = express.Router();

// Admin property routes
router.get("/", propertyController.listProperties);
router.post("/add", propertyController.addProperty);
router.get("/delete/:id", propertyController.deleteProperty);

export default router;