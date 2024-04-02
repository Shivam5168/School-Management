const express = require("express");

require("./config/config");
const teachers = require("./models/teacher/teacher");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  res.send(req.body);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});