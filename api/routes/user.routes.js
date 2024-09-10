const express = require("express");
const {
  updateUser,
  deleteAccount,
  signout,
  getuUsers,
  deleteUser,
} = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyUser.js");

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteAccount);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getuUsers);
router.delete("/deleteuser/:userId", verifyToken, deleteUser);

module.exports = router;
