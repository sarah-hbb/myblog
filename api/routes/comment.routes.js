const express = require("express");
const {
  createComment,
  getPostComments,
  likeComment,
  deleteComment,
  editComment,
} = require("../controllers/comment.controller.js");

const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likecomment/:commentId", verifyToken, likeComment);
router.delete("/deletecomment/:commentId", verifyToken, deleteComment);
router.put("/editcomment/:commentId", verifyToken, editComment);

module.exports = router;
