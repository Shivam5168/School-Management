const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    fullName : String,
    email : String,
    department : String,
    password : String
});


module.exports = mongoose.model("teacher", teacherSchema);
