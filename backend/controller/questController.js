import Quest from '../model/questModel.js';

export const getAllQuests = async (req, res) => {
	try {
		const quests = await Quest.find();
		res.status(200).json(quests);
	} catch (err) {
		console.error('Error fetching quests:', err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
