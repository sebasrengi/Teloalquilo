import { Pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await Pool.query(
      "SELECT * FROM tasks ORDER BY created_at ASC"
    );
    res.json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const [result] = await Pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await Pool.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
    try {
  const result = await Pool.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
} catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  return res.json({
    id: req.params.id,
    ...req.body,
  });
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await Pool.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  return res.sendStatus(204).json({
    message: "Task deleted successfully",
  });
    } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
