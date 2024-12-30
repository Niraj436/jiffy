import express from 'express';
import { getAllRestaurants } from '../controller/restaurantsController.js';
const router = express.Router();

router.route('/').get(getAllRestaurants);

export default router;
