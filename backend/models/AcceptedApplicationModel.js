import mongoose from "mongoose";
const acceptedSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    examid: String,
    gpa: Number,
    department: String,
});

const AcceptedApplication = mongoose.model(
    "Accepted",
    acceptedSchema,
    "accepted"
);

export default AcceptedApplication;
