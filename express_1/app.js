/**
 * 🏗️ ARCHITECTURAL OVERVIEW - MVC Pattern
 * ========================================
 * This app follows the MODEL-VIEW-CONTROLLER (MVC) architecture:
 *
 * MODEL (Data Layer):
 *   - data/users.js → Our "fake database" storing user information
 *   - Represents the data structure and business rules
 *
 * VIEW (Presentation Layer):
 *   - index.html → Frontend UI that users interact with
 *   - JavaScript in index.html makes API calls to the backend
 *
 * CONTROLLER (Business Logic Layer):
 *   - controllers/userController.js → Processes requests and returns responses
 *   - Handles the logic between View and Model
 *
 * ROUTER (Request Handler):
 *   - routes/userRoutes.js → Maps HTTP requests to controller functions
 *   - Acts as the traffic director
 *
 * SERVER (Request/Response Cycle):
 *   - app.js → Main file that ties everything together
 *   - Listens for HTTP requests and routes them appropriately
 *
 * 📊 REQUEST FLOW:
 * Frontend → HTTP Request → Router → Controller → Model → Response → Frontend
 * Example: User clicks Submit → POST /users → userRoutes → createUser() → users.push() → JSON response
 */

// Import Express framework and path utility
const express = require("express");
const path = require("path");

// Create Express application
const app = express();

// Import user routes
const userRoutes = require("./routes/userRoutes");

// ⚙️ MIDDLEWARE - Functions that process every incoming request
// Parse incoming request bodies as JSON (e.g., POST data)
app.use(express.json());

// Serve static files (HTML, CSS, JavaScript) from current directory
app.use(express.static(__dirname));

// 🛣️ ROUTES - Map specific URLs to our route handlers
// Any request to /users goes to userRoutes (GET, POST, GET/:id)
app.use("/users", userRoutes);

// Home route - serves the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🚀 START SERVER - Listen on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});