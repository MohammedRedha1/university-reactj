import express from "express";
import { postRejectedApplication } from "../controllers/rejectedController.js";
const rejectedRouter = express.Router();
rejectedRouter.post("/:id", postRejectedApplication);

export default rejectedRouter;
