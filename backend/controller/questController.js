import Quest from '../model/questModel.js';
import User from '../model/userModel.js';
import Challenge from '../model/challengeModel.js';
import Food from '../model/foodModel.js';
import { populate } from 'dotenv';

export const getAllQuests = async (req, res) => {
	try {
		const quests = await Quest.find();
		const sampleUser = '6772aa17daf5a7614de687c0';

		const user = await User.findById(sampleUser).populate('challengeIds');

		const challengeIds = user.challengeIds.map((challenge) => challenge._id);

		const populatedChallenges = await Challenge.find({
			_id: { $in: challengeIds },
		})
			.populate('foodId')
			.populate('questId');

		const questProgress = quests.map((quest) => {
			const plainQuest = quest.toObject();
			return {
				...plainQuest,
				challengesCompleted: populatedChallenges.filter(
					(challenge) => challenge.questId.name === quest.name
				).length,
			};
		});

		// console.log({ questProgress });

		res.json({ questProgress });
	} catch (err) {
		console.error('Error fetching quests:', err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
