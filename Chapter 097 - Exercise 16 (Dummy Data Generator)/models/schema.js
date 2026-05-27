import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  employeeName: { type: String, required: true, default: "None" },
  salary: { type: Number, required: true, default: 0 },
  language: { type: String, required: true, default: "None" },
  city: { type: String, required: true, default: "None" },
  isManager: { type: Boolean, required: true, default: false }
});

export const DummyData = mongoose.model('dummydata', dataSchema)