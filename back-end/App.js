import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import projectRoutes from "./src/routes/projectRoute.js";
import statRoutes from "./src/routes/statRoute.js";
import contactRoutes from "./src/routes/contactRoute.js";
import authRoutes from "./src/routes/authRoute.js";
import seedAdmin from "./src/config/seed.js";
import { errorHandler } from "./src/middlewares/errorMiddleware.js";

dotenv.config();
connectDB().then(() => {
  seedAdmin(); 
});
const PORT = process.env.PORT ;
const app = express();
app.use(express.json());
app.use(cors());

app.use(errorHandler);
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("This is Tsedenia!");
});
app.use("/api/projects", projectRoutes);
app.use("/api/login", authRoutes);

app.use("/api/stats", statRoutes);
app.use("/api/contacts", contactRoutes);
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});