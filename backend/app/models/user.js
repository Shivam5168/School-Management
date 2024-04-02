const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  department: {
    type: String,
  },
  password: {
    type: String,
  },
  userType:{
    type: String,
  }
});

module.exports = mongoose.model("userTable", userSchema);
