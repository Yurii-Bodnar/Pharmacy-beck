import express from "express";
import mongoose from "mongoose";
import { userDataValidation } from "./src/validations/user.js";
import { getAllProducts } from "./src/controllers/goods.js";
import { userOrder } from "./src/controllers/userOrder.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB running");
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.post("/user-data/order", userDataValidation, userOrder);
    app.get("/all-goods", getAllProducts);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });
