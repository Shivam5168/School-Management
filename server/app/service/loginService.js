const loginRepository = require("../repository/loginRepository");

async function addUser(userData) {
  try {
    const addUserData = await loginRepository.addUser(userData);
    return addUserData;
  } catch (error) {
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const loginUserData = await loginRepository.loginUser(email, password);
    return loginUserData;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUser,
  loginUser,
};
