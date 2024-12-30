import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import restaurantRoute from './routes/restaurantRoute.js';
import questRoute from './routes/questRoute.js';
dotenv.config();

import connectDB from './config/db.js';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/api/restaurants', restaurantRoute);
app.use('/api/quests', questRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
	await connectDB();
	console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
