import express from "express";
import { postForm } from "../controllers/applicationController.js";
const postFormRouter = express.Router();
postFormRouter.post("/", postForm);

export default postFormRouter;
