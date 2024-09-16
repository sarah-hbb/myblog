const errorHandler = require("../utils/error.js");
const Comment = require("../models/comment.model.js");

// Create a comment
const createComment = async (req, res, next) => {
  try {
    if (req.user.id !== req.body.userId) {
      return next(errorHandler(403, "you are not allowed to post a comment"));
    }
    const newComment = new Comment({
      content: req.body.content,
      userId: req.body.userId,
      postId: req.body.postId,
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

module.exports = { createComment };
