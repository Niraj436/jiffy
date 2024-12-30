import express from 'express';
import { getAllRestaurants } from '../controller/restaurantsController';
const router = express.Router();

router.route('/').get(getAllRestaurants);

export default router;
