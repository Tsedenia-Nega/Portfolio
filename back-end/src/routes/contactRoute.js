import express from 'express';
import { saveMessage,deleteMessage,getAllMessages } from '../controllers/contactController';

const router = express.Router();

router.post('/', saveMessage);
router.get('/', getAllMessages);
router.delete('/:id', deleteMessage);
export default router;