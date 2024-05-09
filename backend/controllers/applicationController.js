import PendingApplication from "../models/PendingApplicationModel.js";
import RejectedApplication from "../models/RejectedApplicationModel.js";
import AcceptedApplication from "../models/AcceptedApplicationModel.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const WebSocket = require("ws");
import { wss } from "../server.js";
export async function postForm(req, res) {
    try {
        const { name, email, phone, department, examid, gpa } = req.body;

        if (await PendingApplication.exists({ examid: examid })) {
            res.status(409).json({
                message: {
                    en: "Already Applied and waiting for review.",
                    ar: "تم التقديم بالفعل وفي انتظار المراجعة.",
                },
            });
            return;
        }
        if (await RejectedApplication.exists({ examid: examid })) {
            res.status(409).json({
                message: {
                    en: "Already Applied And Got Rejected.",
                    ar: "تم رفض الطلب بالفعل.",
                },
            });
            return;
        }
        if (await AcceptedApplication.exists({ examid: examid })) {
            res.status(409).json({
                message: {
                    en: "Already Applied And Got Accepted.",
                    ar: "تم قبول الطلب بالفعل.",
                },
            });
            return;
        }
        const application = new PendingApplication({
            name,
            email,
            phone,
            department,
            examid,
            gpa,
        });
        await application.save();

        console.log(`Sending application to ${wss.clients.size} clients`);
        wss.clients.forEach((client) => {
            console.log(`Client readyState: ${client.readyState}`);
            if (client.readyState === WebSocket.OPEN) {
                const data = JSON.stringify(application);
                console.log(`Sending data: ${data}`);
                client.send(data);
            }
        });

        res.status(200).json({ message: "Application submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to submit application" });
    }
}
export async function checkStatus(req, res) {
    try {
        const { examid_st } = req.body;
        if (
            !(await PendingApplication.exists({ examid: examid_st })) &&
            !(await RejectedApplication.exists({ examid: examid_st })) &&
            !(await AcceptedApplication.exists({ examid: examid_st }))
        ) {
            res.status(404).json({
                message: {
                    en: "No application found with this Exam ID!",
                    ar: "لا يوجد طلب بهذا الرقم الامتحاني!",
                },
            });
            return;
        }
        if (await PendingApplication.exists({ examid: examid_st })) {
            res.status(200).json({
                message: {
                    en: "Application is pending and waiting for review!",
                    ar: "الطلب قيد الانتظار وفي انتظار المراجعة!",
                },
            });
            return;
        }
        if (await RejectedApplication.exists({ examid: examid_st })) {
            res.status(200).json({
                message: {
                    en: "Application got rejected!",
                    ar: "تم رفض الطلب!",
                },
            });
            return;
        }
        if (await AcceptedApplication.exists({ examid: examid_st })) {
            res.status(200).json({
                message: {
                    en: "Application got accepted!",
                    ar: "تم قبول الطلب!",
                },
            });
            return;
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to get status" });
    }
}
export async function getPendingApplications(req, res) {
    try {
        const applications = await PendingApplication.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: "Failed to get applications" });
    }
}
