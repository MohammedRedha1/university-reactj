import express from "express";
import { postAcceptedApplication } from "../controllers/acceptedController.js";
const acceptedRouter = express.Router();
acceptedRouter.post("/:id", postAcceptedApplication);

export default acceptedRouter;
