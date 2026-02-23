import express from 'express';
import { createProject, getAllProjects, getProject, updateProject, deleteProject } from '../controllers/projectController.js'; 
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProject);
router.post('/', protect,createProject);
router.put('/:id',protect, updateProject);
router.delete('/:id',protect, deleteProject);
export default router;