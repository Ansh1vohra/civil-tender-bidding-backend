import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  role: "bidder" | "owner" | "admin";
  skills: string[];
  location: string;
  minBudget: number;
  maxBudget: number;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["bidder", "owner", "admin"], default: "bidder" },
  skills: [String],
  location: String,
  minBudget: Number,
  maxBudget: Number,
});

export default mongoose.model<IUser>("User", UserSchema);
