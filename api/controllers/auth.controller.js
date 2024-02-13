const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // how to hide the passwords on database using bcryptjs
  const hashedpassword = bcryptjs.hashSync(password, 10);

  // using created mongoose model
  const newUser = new User({
    username,
    email,
    password: hashedpassword,
  });
  try {
    // saving user in database
    await newUser.save();
    res.json("Successful Signup");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = signup;
