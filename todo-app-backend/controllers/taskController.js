const connection = require("../db/dbconnection");

// getAll
exports.getAllTasks = (req, res) => {
  connection.query("SELECT * FROM tasks", (err, results) => {
    if (!err) res.status(200).json(results);
    else res.status(500).send("Error fetching tasks");
  });
};

// post
exports.createTask = (req, res) => {
  const { title, status = 'pending' } = req.body;
  connection.query("INSERT INTO tasks (title, status) VALUES (?, ?)",
    [title, status],
    (err, result) => {
      if (!err) res.status(201).send("Task created");
      else res.status(500).send("Error creating task");
    }
  );
};

// put
exports.updateTask = (req, res) => {
  const { title, status } = req.body;
  connection.query("UPDATE tasks SET title = ?, status = ? WHERE id = ?",
    [title, status, req.params.id],
    (err, result) => {
      if (!err && result.affectedRows > 0) res.status(200).send("Task updated");
      else res.status(404).send("Task not found");
    }
  );
};

// delete
exports.deleteTask = (req, res) => {
  connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id], (err, result) => {
    if (!err && result.affectedRows > 0) res.status(200).send("Task deleted");
    else res.status(404).send("Task not found");
  });
};
