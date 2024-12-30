import express from 'express';
const router = express.Router();

router.route('/').get(getAllQuests);

export default router;
