import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    department: String,
    examid: String,
    gpa: Number,
});
const PendingApplication = mongoose.model(
    "Application",
    applicationSchema,
    "pending"
);

export default PendingApplication;
