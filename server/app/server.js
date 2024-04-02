const express = require("express");
const teacherRoutes = require("./routes/teacherRoutes");
const db = require("./config/config")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/school-management", teacherRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});