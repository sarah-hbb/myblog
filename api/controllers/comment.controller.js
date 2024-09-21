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

// get all comments of a post
const getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({
      postId: req.params.postId,
    })
      .sort({ createdAt: -1 })
      .skip(req.query.startIndex)
      .limit(5);

    const totalComments = await Comment.find({
      postId: req.params.postId,
    }).countDocuments();

    res.status(200).json({ comments, totalComments });
  } catch (error) {
    next(error);
  }
};

// handle like/unlike a comment
const likeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, "Comment not found"));
    }
    const currentUserIdIndex = comment.likes.indexOf(req.user.id);
    // when current user has not liked the comment yet: like
    if (currentUserIdIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      // when cuurent user already liked the comment: unlike
      comment.numberOfLikes -= 1;
      comment.likes.splice(currentUserIdIndex, 1);
    }
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

module.exports = { createComment, getPostComments, likeComment };
