const loginService = require("../service/loginService");

const registerUser = async (req, res, next) => {
  try {
    const teacherData = {
      fullName: req.body.fullName,
      email: req.body.email,
      department: req.body.department,
      password: req.body.password,
      userType: req.body.userType,
    };
    const addTeacherData = await loginService.addUser(teacherData);
    res.json(addTeacherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const loginUserData = await loginService.loginUser(email, password);
    res.json(loginUserData);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { registerUser, loginUser };
