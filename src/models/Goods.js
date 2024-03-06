import mongoose from "mongoose";

const GoodsSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Goods", GoodsSchema);
