
const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");

// Create a Task
router.post("/api/tasks", createTask);

  //  Get/Read Tasks
router.get("/api/tasks", getTasks);

// Get a single Task
router.get("/api/tasks/:id", getTask);

// Delete task
router.delete("/api/tasks/:id", deleteTask);

// update a task
router.put("/api/tasks/:id", updateTask);

  

module.exports = router;