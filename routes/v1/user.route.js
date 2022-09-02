const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");

// get random user
router.get("/random", userController.getRandomUser);
// get all user 
router.get("/all", userController.getAllUsers);

module.exports = router;