import { body } from "express-validator";

export const userDataValidation = [
  body("name")
    .isLength({ min: 2 })
    .withMessage("The name must have at least 3 characters"),
  body("email", "Incorrect mail format").isEmail(),
  body("phone")
    .isNumeric()
    .withMessage("The phone number must contain only numbers"),
  body("address")
    .isLength({ min: 7 })
    .withMessage("The name must have at least 7 characters"),
  body("order").isArray(),
];
