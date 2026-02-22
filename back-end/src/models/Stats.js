import mongoose from "mongoose";

const statsSchema = new mongoose.Schema(
  {
    totalProjects: { type: Number, default: 0 },
    totalClients: { type: Number, default: 0 },
    yearsOfExperience: { type: Number, default: 1 },
  },
  { timestamps: true },
);

const Stats = mongoose.model("Stats", statsSchema);
export default Stats;
