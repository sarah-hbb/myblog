const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error.js");
const jwt = require("jsonwebtoken");

// Signup
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // return new error
    next(errorHandler(400, "All fields are required"));
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
    next(err);
  }
};

// Signin
const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required!"));
  }
  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(400, "User not found!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400, "Invalid username or password!"));
    }

    // create jwt token and send it to cookie
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, signin };
