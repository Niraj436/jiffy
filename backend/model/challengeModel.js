import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema(
  {
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food',
      required: true,
    },
    questId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quest',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const Challenge = mongoose.model('Challenge', challengeSchema);

export default Challenge;
