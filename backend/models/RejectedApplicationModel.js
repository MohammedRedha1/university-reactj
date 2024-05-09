import mongoose from "mongoose";
const rejectedSchema = new mongoose.Schema({
    name: String,
    email: String,
    examid: String,
    phone: String,
    gpa: Number,
});

const RejectedApplication = mongoose.model(
    "Rejected",
    rejectedSchema,
    "rejected"
);

export default RejectedApplication;
