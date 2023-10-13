const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Add a Student
router.post("/students", studentController.addStudent);

// update a Student
router.put("/students/:id", studentController.updateStudent);

// get all Students
router.get("/students", studentController.getAllStudents);

// delete a student by id
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
