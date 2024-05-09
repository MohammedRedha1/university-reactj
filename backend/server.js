import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { createRequire } from "module";
import postFormRouter from "./routes/formRoute.js";
import acceptedRouter from "./routes/acceptRoute.js";
import rejectedRouter from "./routes/rejectRoute.js";
import getPendingRouter from "./routes/getPendingRoute.js";
import getAcceptedRouter from "./routes/getAcceptedRoute.js";
import getRejectedRouter from "./routes/getRejectedRoute.js";
import checkRouter from "./routes/checkStatusRoute.js";

const require = createRequire(import.meta.url);
const WebSocket = require("ws");
const app = express();
const PORT = 8080;
app.use(cors());
mongoose.connect("mongodb://localhost:27017/applications");

app.use(bodyParser.json());

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// endpoint: handle form submission
app.use("/apply", postFormRouter);
// endpoint: handle acceptance
app.use("/accept", acceptedRouter);
// endpoint: handle rejection
app.use("/reject", rejectedRouter);
// endpoint: get all pending applications
app.use("/pending", getPendingRouter);
// endpoint: get all accepted applications
app.use("/accepted", getAcceptedRouter);
// endpoint: get all rejected applications
app.use("/rejected", getRejectedRouter);
// endpoint: handle checking for status
app.use("/check", checkRouter);

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Hello, you sent -> ${message}`);
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

export { wss };
