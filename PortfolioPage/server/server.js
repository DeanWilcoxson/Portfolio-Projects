const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
require("dotenv").config();
mongoose.connect();
app.use(express.json());
app.use(morgan("dev"));
app.use("", require("./Routes/router"));
app.use(
  "/api",
  expressJwt({ secret: process.env.secret, algorithms: ["HS256"] })
);
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});
app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
