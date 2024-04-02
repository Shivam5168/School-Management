const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/school-management")
  .then(() => {
    console.log("Database is connected Successfully");
  })
  .catch((err) => {
    console.log("Database cannot be connected:", err);
  });

module.exports = mongoose;
