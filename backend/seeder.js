import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './model/userModel.js';
import Restaurant from './model/restaurantModel.js';
import Quest from './model/questModel.js';
import Food from './model/foodModel.js';
import Challenge from './model/challengeModel.js';
import seedRestaurants from './data/restaurant.js';
import seedFoodData from './data/food.js';
import seedQuests from './data/quest.js';
import seedUsers from './data/users.js';

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Quest.deleteMany();
    await Restaurant.deleteMany();
    await Food.deleteMany();
    await Challenge.deleteMany();

    const createdRests = await Restaurant.insertMany(seedRestaurants);

    console.log({ createdRests: createdRests });

    const sampleFoods = seedFoodData.map((food, i) => {
      return {
        ...food,
        restaurantId: createdRests[i]._id,
      };
    });

    const createdFoods = await Food.insertMany(sampleFoods);
    console.log({ createdFoods: createdFoods });

    const newariFoods = createdFoods
      .filter((food, idx) => idx < 8)
      .map((i) => i._id);
    const mithilaFoods = createdFoods
      .filter((food, idx) => idx < 13 && idx > 7)
      .map((i) => i._id);
    const tibetanFoods = createdFoods
      .filter((food, idx) => idx < 23 && idx > 12)
      .map((i) => i._id);
    const vegeterianFoods = createdFoods
      .filter((food, idx) => idx > 22)
      .map((i) => i._id);

    const sampleQuests = seedQuests.map((quest, i) => {
      return {
        ...quest,
        foodChallenges:
          quest.name === 'Newari Cuisine'
            ? newariFoods
            : quest.name === 'Mithila Cuisine'
            ? mithilaFoods
            : quest.name === 'Tibetan Cuisine'
            ? tibetanFoods
            : vegeterianFoods,
      };
    });

    const createdQuests = await Quest.insertMany(sampleQuests);
    console.log({ createdQuests: createdQuests });

    const newariId = createdQuests.find(
      (quest) => quest.name === 'Newari Cuisine'
    )._id;
    const mithilaId = createdQuests.find(
      (quest) => quest.name === 'Mithila Cuisine'
    )._id;
    const tibeanId = createdQuests.find(
      (quest) => quest.name === 'Tibetan Cuisine'
    )._id;
    const vegeterianId = createdQuests.find(
      (quest) => quest.name === 'Vegeterian Cuisine'
    )._id;

    console.log({ newariId, mithilaId, tibeanId, vegeterianId });

    const sampleChallenges = createdFoods.map((food, i) => {
      return {
        completed: false,
        foodId: food._id,
        questId:
          i < 8
            ? newariId
            : i < 13
            ? mithilaId
            : i < 23
            ? tibeanId
            : vegeterianId,
      };
    });

    const createdChallanges = await Challenge.insertMany(sampleChallenges);
    console.log({ createdChallanges: createdChallanges });

    const sampleUsers = seedUsers.map((user, i) => {
      return {
        ...user,
        challengeIds:
          i === 2 ? [createdChallanges[0]._id, createdChallanges[1]._id] : [],
      };
    });

    const createdUsers = await User.insertMany(sampleUsers);

    console.log({ createdUsers: createdUsers });

    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

function getRandomSubset(array) {
  const maxElements = 5;
  const numElements = Math.floor(Math.random() * maxElements) + 1; // Random count between 1 and 5
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numElements);
}

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
