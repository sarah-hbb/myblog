const express = require("express");
const {
  create,
  getPosts,
  deletepost,
} = require("../controllers/post.controller.js");
const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

module.exports = router;
