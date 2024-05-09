import PendingApplication from "../models/PendingApplicationModel.js";
import AcceptedApplication from "../models/AcceptedApplicationModel.js";
export async function postAcceptedApplication(req, res) {
    try {
        const application = await PendingApplication.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ error: "Application not found" });
        }

        const applicationObject = application.toObject();
        delete applicationObject._id; 
        const acceptedApplication = new AcceptedApplication(applicationObject);
        await acceptedApplication.save();

        await PendingApplication.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Application accepted!" });
    } catch (error) {
        console.error("Error accepting application:", error);
        res.status(500).json({ error: "Failed to accept application" });
    }
}

export async function getAcceptedApplications(req, res) {
    try {
        const applications = await AcceptedApplication.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: "Failed to get applications" });
    }
}
