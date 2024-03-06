import Goods from "../models/Goods.js";

export const getAllProducts = async (req, res) => {
  try {
    const data = await Goods.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to send data", err });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { avatar, title, price } = req.body;
    const dataCollections = new Goods({
      avatar,
      title,
      price,
    });
    const data = await dataCollections.save();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to send data", err });
  }
};
