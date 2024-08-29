const express = require("express");
const { create, getPosts } = require("../controllers/post.controller.js");
const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);

module.exports = router;
