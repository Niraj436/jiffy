import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model('Food', foodSchema);

export default Food;
