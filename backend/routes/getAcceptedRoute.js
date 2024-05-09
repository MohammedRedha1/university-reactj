import express from "express";
import { getAcceptedApplications } from "../controllers/acceptedController.js";
const getAcceptedRouter = express.Router();
getAcceptedRouter.get("/", getAcceptedApplications);

export default getAcceptedRouter;
