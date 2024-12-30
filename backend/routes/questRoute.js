import express from 'express';
import {
  getAllQuests,
  getQuest,
  completeChallenge,
} from '../controller/questController.js';
const router = express.Router();

router.route('/').get(getAllQuests).post(completeChallenge);
router.route('/:id').get(getQuest);

export default router;
