const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");
const filedValidation = require("../../middlewares/userFieldValidation");

// get random user
router.get("/random", userController.getRandomUser);
// get all user
router.get("/all", userController.getAllUsers);
// save random user
router.post("/save", filedValidation, userController.saveRandomUser);
// update random user
router.patch("/update/:id", userController.updateRandomUser);
// delete random user
router.delete("/delete/:id", userController.deleteRandomUser);

module.exports = router;