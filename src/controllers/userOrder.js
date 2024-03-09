import { validationResult } from "express-validator";
import UserOrder from "../models/UserOrder.js";

export const userOrder = async (req, res) => {
  const { name, email, phone, address, order } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  try {
    const user = new UserOrder({
      name,
      email,
      phone,
      address,
      order,
    });
    const data = await user.save();
    res.json({
      message: "Successfully, your order will be fulfilled in the near future",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to send data" });
  }
};
