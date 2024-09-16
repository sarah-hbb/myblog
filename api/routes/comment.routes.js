const express = require("express");
const { createComment } = require("../controllers/comment.controller.js");

const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.post("/create", verifyToken, createComment);
//router.get("/getcomments", getComments);
//router.delete("/deletecomment/:postId/:userId", verifyToken, deleteComment);
//router.put("/updatecomment/:postId/:userId", verifyToken, updateComment);

module.exports = router;
