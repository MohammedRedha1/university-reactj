import express from "express";
import { getPendingApplications } from "../controllers/applicationController.js";
const getPendingRouter = express.Router();
getPendingRouter.get("/", getPendingApplications);

export default getPendingRouter;
