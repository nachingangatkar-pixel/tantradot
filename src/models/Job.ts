import mongoose, { Schema, models } from "mongoose";

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requiredSkills: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

// Clear any existing model to force schema refresh
delete models.Job;

const Job = mongoose.model("Job", JobSchema);
export default Job;
