import express from "express";
import { getStats, updateStats } from "../controllers/statsController.js";


const router = express.Router();


router.get("/", getStats);

router.put("/",updateStats);

export default router;
