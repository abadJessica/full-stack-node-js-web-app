import express from "express";
import agentController from "./controller.js";

const router = express.Router();

// Admin agent routes
router.get("/", agentController.listAgents);
router.post("/add", agentController.addAgent);
router.get("/delete/:id", agentController.deleteAgent);

export default router;