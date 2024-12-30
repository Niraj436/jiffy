import mongoose from 'mongoose';

const questSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Cultural', 'Dietary'],
      required: true,
    },
  },
  { timestamps: true }
);

const Quest = mongoose.model('Quest', questSchema);

export default Quest;
