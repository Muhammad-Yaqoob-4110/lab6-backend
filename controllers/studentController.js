const Student = require("../models/student");

// Add a Student
async function addStudent(req, res) {
  try {
    console.log(req.body);
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// Update a Student by Id
async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all students
async function getAllStudents(req, res) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete a product by Id
async function deleteStudent(req, res) {
  try {
    const { id } = req.params;
    await Student.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500).json({ error: err.message });
  }
}

module.exports = {
  addStudent,
  updateStudent,
  getAllStudents,
  deleteStudent,
};
