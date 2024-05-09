import express from "express";
import { checkStatus } from "../controllers/applicationController.js";
const checkRouter = express.Router();

checkRouter.post("/", checkStatus);

export default checkRouter;
