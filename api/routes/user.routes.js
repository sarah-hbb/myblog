const express = require("express");
const {
  updateUser,
  deleteAccount,
  signout,
  getUsers,
  deleteUser,
  getUser,
} = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteAccount);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.delete("/deleteuser/:userId", verifyToken, deleteUser);
router.get("/:userId", getUser);

module.exports = router;
