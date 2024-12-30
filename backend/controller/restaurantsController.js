import Restaurant from '../model/restaurantModel.js';

export const getAllRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find();
		res.status(200).json(restaurants);
	} catch (err) {
		console.error('Error fetching restaurants:', err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
