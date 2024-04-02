const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();


async function addUser(userData) {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const loginUser = await User.findOne({email});
    if (loginUser) {
      const isPasswordMatch = password === loginUser.password;
      if (isPasswordMatch) {
        const token = jwt.sign(
          {
            email: User.email,
            department: User.department,
            userType: User.userType,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        return { success: true, email, token };
      } else {
        return { error: "Password doesn't match" };
      }
    } else {
      return { error: "User doesn't exist" };
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUser,
  loginUser,
};
