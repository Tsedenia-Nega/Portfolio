import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const seedAdmin = async () => {
  try {

    const adminExists = await User.findOne({ email: "tsedenia301@gmail.com" });

    if (!adminExists) {
      await User.deleteMany({}); 
      const hashedPassword = await bcrypt.hash("Goodfuture94!", 10);

      await User.create({
        email: "tsedenia301@gmail.com",
        password: hashedPassword,
      });
      console.log(" Admin seeded successfully!");
    } else {
      console.log(" Admin already exists, skipping seed.");
    }
  } catch (error) {
    console.error(" Seeding error:", error.message);
  }
};

export default seedAdmin;
