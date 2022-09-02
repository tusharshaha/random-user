const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");

router.get("/random", userController.getRandomUser)

module.exports = router;