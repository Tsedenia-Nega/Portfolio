import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import projectRoutes from "./src/routes/projectRoute.js";
import statRoutes from "./src/routes/statRoute.js";
import contactRoutes from "./src/routes/contactRoute.js";
dotenv.config();
connectDB();
const PORT = process.env.PORT ;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is Tsednia!");
});
app.use("/api/projects", projectRoutes);
import statRoutes from "./src/routes/statRoute.js";
app.use("/api/stats", statRoutes);
app.use("/api/contact", contactRoutes);
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});