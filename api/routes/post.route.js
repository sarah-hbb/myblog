const express = require("express");
const create = require("../controllers/post.controller.js");
const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.post("/create", verifyToken, create);

module.exports = router;
