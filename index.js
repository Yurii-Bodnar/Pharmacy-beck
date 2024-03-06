import express from "express";
import mongoose from "mongoose";
import { userDataValidation } from "./src/validations/user.js";
import { createProducts, getAllProducts } from "./src/controllers/goods.js";
import { userOrder } from "./src/controllers/userOrder.js";

const MONGODB_URI =
  "mongodb+srv://admin:QizhDm2m3RcP45lH@cluster0.pq3ai2w.mongodb.net/pharmacy?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("DB running");
    const app = express();
    app.use(express.json());
    app.post("/user-data/order", userDataValidation, userOrder);
    app.post("/add-product", createProducts);
    app.get("/all-goods", getAllProducts);
    app.listen(6000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1); // Вийти з програми у разі помилки підключення до бази даних
  });
