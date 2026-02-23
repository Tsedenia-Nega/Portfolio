import express from 'express';
import { saveMessage,deleteMessage,getAllMessages } from '../controllers/contactController.js';
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/', saveMessage);
router.get('/', protect, getAllMessages);
router.delete('/:id',protect, deleteMessage);
export default router;