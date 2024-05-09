import PendingApplication from "../models/PendingApplicationModel.js";
import RejectedApplication from "../models/RejectedApplicationModel.js";
export async function postRejectedApplication(req, res) {
    try {
        const application = await PendingApplication.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ error: "Application not found" });
        }

        const applicationObject = application.toObject();
        delete applicationObject._id;
        const rejectedApplication = new RejectedApplication(applicationObject);
        await rejectedApplication.save();

        await PendingApplication.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Application rejected!" });
    } catch (error) {
        console.error("Error rejecting application:", error);
        res.status(500).json({ error: "Failed to reject application" });
    }
}

export async function getRejectedApplications(req, res) {
    try {
        const applications = await RejectedApplication.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: "Failed to get applications" });
    }
}
