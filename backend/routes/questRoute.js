import express from 'express';
import { getAllQuests, getQuest } from '../controller/questController.js';
const router = express.Router();

router.route('/').get(getAllQuests);
router.route('/:id').get(getQuest);

export default router;
