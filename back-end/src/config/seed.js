import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();
const seedAdmin = async ()=>{
    try{

await mongoose.connect(process.env.MONGO_URI);
await User.deleteMany();

const hashedPassword = await bcrypt.hash("Goodfuture94!", 10);
await User.create({
  email: "tsedenia301@gmail.com",
  password: hashedPassword,
});

console.log("Admin user seeded successfully!");
process.exit();

    }catch(error){
console.error("Error seeding user:", error);
process.exit(1);
    }
}
seedAdmin();
export default seedAdmin;