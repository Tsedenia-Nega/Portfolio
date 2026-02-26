import express from "express";
import multer from "multer";
import {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Configure Multer for local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Routes
router.get("/", getAllProjects);
router.get("/:id", getProject);

// Notice: upload.single('image') matches the 'image' key in our FormData
router.post("/", protect, upload.single("image"), createProject);
router.put("/:id", protect, upload.single("image"), updateProject);

router.delete("/:id", protect, deleteProject);

export default router;
