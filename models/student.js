const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    studentName: String,
    registrationNo: String,
    fatherName: String,
    dateOfBirth: Date,
    contact: Number,
  },
  { timestamps: true } // created at and updated at will be managed automatically
);

module.exports = mongoose.model("Students", studentSchema); // table name & schema
