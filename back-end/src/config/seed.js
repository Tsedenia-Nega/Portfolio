import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const seedAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Safety check: Make sure the env variables actually exist
    if (!adminEmail || !adminPassword) {
      console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env file");
      return;
    }

    const adminExists = await User.findOne({ email: adminEmail });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await User.create({
        email: adminEmail,
        password: hashedPassword,
      });
      console.log("Admin seeded successfully!");
    } else {
      console.log("Admin already exists, skipping seed.");
    }
  } catch (error) {
    console.error(" Seeding error:", error.message);
  }
};

export default seedAdmin;
