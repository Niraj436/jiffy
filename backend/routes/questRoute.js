import express from 'express';
import { getAllQuests } from '../controller/questController.js';
const router = express.Router();

router.route('/').get(getAllQuests);

export default router;
