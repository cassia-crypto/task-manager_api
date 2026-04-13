const express = require("express");
const app = express();

app.use(express.json()); // to read JSON data

// ✅ In-memory data storage
let tasks = [];
let idCounter = 1;

// ✅ Root route (test if server is running)
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

// ✅ Create a new task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  // validation
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: idCounter++,
    title,
    description: description || "",
    status: "pending",
    createdAt: new Date()
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.get("/tasks", (req, res) => {
  let result = tasks;

  const { status, sort } = req.query;

  if (status) {
    result = result.filter(task => task.status === status);
  }

  if (sort === "createdAt") {
    result = result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  res.json(result);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description } = req.body;

  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  // validation
  if (!title && !description) {
    return res.status(400).json({ error: "Nothing to update" });
  }

  if (title) task.title = title;
  if (description) task.description = description;

  res.json(task);
});

app.patch("/tasks/:id/done", (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.status = "done";

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const index = tasks.findIndex(task => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);

res.status(200).json({ message: "Task deleted successfully" });
});

app.all("/tasks", (req, res) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

