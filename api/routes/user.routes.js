const express = require("express");
const updateUser = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);

module.exports = router;
