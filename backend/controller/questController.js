import Quest from '../model/questModel.js';
import User from '../model/userModel.js';
import Food from '../model/foodModel.js';
import Challenge from '../model/challengeModel.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleUser = process.env.SAMPLE_USER_ID;

export const getAllQuests = async (req, res) => {
  try {
    const quests = await Quest.find();

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

    console.log({ questProgress });

    res.json({ questProgress });
  } catch (err) {
    console.error('Error fetching quests:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getQuest = async (req, res) => {
  try {
    console.log('parms', req.params.id);
    const quest = await Quest.findById(req.params.id).populate({
      path: 'foodChallenges',
      populate: { path: 'restaurantId' },
    });

    const user = await User.findById(sampleUser).populate('challengeIds');

    const challengeIds = user.challengeIds.map((challenge) => challenge._id);

    const populatedChallenges = await Challenge.find({
      _id: { $in: challengeIds },
    })
      .populate('foodId')
      .populate('questId');

    const questDetails = {
      ...quest.toObject(),
      challenges: populatedChallenges.filter(
        (challenge) => challenge.questId.name === quest.name
      ),
    };

    res.json({ questDetails });
  } catch (err) {
    console.error('Error fetching quest:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const completeChallenge = async (req, res) => {
  try {
    const { questId, cart } = req.body;
    console.log('called');

    console.log({ questId, cart });
    const foodId = cart[0]._id;
    const challenge = await Challenge.create({
      questId,
      foodId,
      completed: true,
    });

    await User.findByIdAndUpdate(sampleUser, {
      $push: { challengeIds: challenge._id },
    });

    res.json({ challenge });
  } catch (err) {
    console.error('Error completing challenge:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
