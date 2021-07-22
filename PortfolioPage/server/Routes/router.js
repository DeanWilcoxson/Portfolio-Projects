const { Router } = require("express");
const express = require("express");
const router = express.Router();
const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Dom Manipulation",
    "React.Js",
    "State Management(Context, Redux)",
  ],
  backend: [
    "Express.Js",
    "Axios",
    "RESTful API design",
    "Mongoose",
    "MySQL",
    "MongoDB",
    "Encryption/Authentication",
  ],
  other: [
    "Docker",
    "Object-Oriented Programming",
    "Debugging",
    "Node.Js",
    "Exposure to Nginx/ Apache",
  ],
};
router.get("/", (req, res) => {
  // console.log("get")
  res.send(skills);
});
app.use("/", require("./Routes/router"), );

module.exports = router;
