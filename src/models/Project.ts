import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  budget: number;
  location: string;
  skillsRequired: string[];
  deadline: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: String,
  budget: Number,
  location: String,
  skillsRequired: [String],
  deadline: Date,
});

export default mongoose.model<IProject>("Project", ProjectSchema);
