# 📝 Task Manager API

A simple REST API built using **Node.js** and **Express.js** to manage tasks.
This project demonstrates basic CRUD operations, error handling, and clean API design.

---

## Features

- Create a new task
- Get all tasks
- Get task by ID
- Update a task
- Mark task as completed
- Delete a task
- Filter tasks by status
- Sort tasks by creation time

---

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES6+)
- JSON (for data handling)

---

## Project Structure

task-manager_api/
-index.js # Main server file (all API logic here)
-package.json # Project metadata & dependencies
-package-lock.json # Dependency lock file
-README.md # Project documentation
-node_modules/ # Auto-generated dependencies (ignored in Git)


---

## Installation & Setup

### 1. Clone the repository
git clone https://github.com/cassia-crypto/task-manager_api
2. Install dependencies
npm install
3. Start the server
npm start


---

### API Base URL:
http://localhost:3000


---

### API Endpoints:
Create a task
POST /tasks

Get all tasks
GET /tasks

Get task by ID
GET /tasks/:id

Update a task
PUT /tasks/:id

Delete a task
DELETE /tasks/:id


---

### Example Task JSON:
{
  "id": 1,
  "title": "Complete assignment",
  "status": "pending",
  "createdAt": "2026-04-14"
}


---

### Future Improvements:
Add MongoDB database support
Add user authentication (JWT)
Add pagination and filtering
Deploy using Docker / Render / Vercel


---

### Author:
Cassia Rose Kataria
GitHub: https://github.com/cassia-crypto


---

### License:
This project is open-source and available under the MIT License.
