import express from "express";
import mongoose from "mongoose";
import { userDataValidation } from "./src/validations/user.js";
import { getAllProducts } from "./src/controllers/goods.js";
import { userOrder } from "./src/controllers/userOrder.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

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
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });
process.on("uncaughtException", function (err) {
  console.error("Caught exception: ", err.stack);
});
