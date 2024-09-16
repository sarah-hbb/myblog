const express = require("express");
const {
  createComment,
  getPostComments,
} = require("../controllers/comment.controller.js");

const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
//router.delete("/deletecomment/:postId/:userId", verifyToken, deleteComment);
//router.put("/updatecomment/:postId/:userId", verifyToken, updateComment);

module.exports = router;
