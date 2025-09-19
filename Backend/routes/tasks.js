import express from "express";
import pool from "../db/index.js"; // ✅ Adjust path if needed
import verifyNeonToken from "../middleware/authMiddleware.js"; // ✅ ES module import

const router = express.Router();

// GET all tasks (protected)
router.get("/", verifyNeonToken, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tasks WHERE user_id = $1",
      [req.user.sub]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("GET /api/tasks error:", err.message);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// POST a new task (protected)
router.post("/", verifyNeonToken, async (req, res) => {
  try {
    const { title, description, startDate, endDate } = req.body;

    if (!title || !description || !startDate || !endDate) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await pool.query(
      "INSERT INTO tasks (title, description, start_date, end_date, user_id) VALUES ($1, $2, $3, $4, $5)",
      [title, description, startDate, endDate, req.user.sub]
    );

    res.status(201).json({ message: "Task created successfully" });
  } catch (err) {
    console.error("POST /api/tasks error:", err.message);
    res.status(500).json({ error: "Failed to create task" });
  }
});

// DELETE a task by ID (protected)
router.delete("/:id", verifyNeonToken, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 AND user_id = $2",
      [id, req.user.sub]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found or unauthorized" });
    }

    res.status(204).send();
  } catch (err) {
    console.error("DELETE /api/tasks/:id error:", err.message);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

export default router;