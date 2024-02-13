const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes.js");
const authRoutes = require("./routes/auth.routes.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(() => console.log("mongo db is connected"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
// to use json format for input of the backend
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
