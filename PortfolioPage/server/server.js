const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  return res.status(500).send({ errMsg: err.message });
});
app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
