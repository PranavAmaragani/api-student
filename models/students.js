import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 18 },
    department: { type: String },
    admissionDate: { type: Date, default: Date.now }
});


export const StudentDetails = mongoose.model("StudentDetails", studentSchema);









