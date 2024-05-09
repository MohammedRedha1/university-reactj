import express from "express";
import { getRejectedApplications } from "../controllers/rejectedController.js";
const getRejectedRouter = express.Router();

getRejectedRouter.get("/", getRejectedApplications);

export default getRejectedRouter;
