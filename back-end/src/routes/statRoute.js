import express from "express";
import { getStats, updateStats } from "../controllers/statsController.js";
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();


router.get("/", getStats);

router.put("/",protect,updateStats);

export default router;
