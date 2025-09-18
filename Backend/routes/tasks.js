const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (err) {
    console.error("GET /api/tasks error:", err.message);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// POST a new task
router.post("/", async (req, res) => {
  try {
    const { title, description, startDate, endDate } = req.body;

    if (!title || !description || !startDate || !endDate) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await pool.query(
      "INSERT INTO tasks (title, description, start_date, end_date) VALUES ($1, $2, $3, $4)",
      [title, description, startDate, endDate]
    );

    res.status(201).json({ message: "Task created successfully" });
  } catch (err) {
    console.error("POST /api/tasks error:", err.message);
    res.status(500).json({ error: "Failed to create task" });
  }
});

// DELETE a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error("DELETE /api/tasks/:id error:", err.message);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;