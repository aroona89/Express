/**
 * 🛣️ ROUTER LAYER - Request Routing
 * =================================
 * This file defines all the API endpoints (routes) for user management.
 * Routes act as the "traffic director" - they match HTTP requests
 * to the appropriate controller functions.
 *
 * URL structure: http://localhost:3000/users + [route path]
 * Example routes:
 *   GET /users → retrieves all users
 *   POST /users → creates a new user
 *   GET /users/5 → retrieves user with id=5
 */

// Import Express and create a router object
// The router will be used to define route handlers for user-related endpoints
// Not full server — just a routing section that will be plugged into the main app.js file
const express = require("express");
const router = express.Router();

// Import the controller functions that handle business logic
// These functions will be called when the corresponding routes are hit
// The controller functions are defined in userController.js and contain the logic for interacting with the database
// 👉 You are importing business logic
// So: Routes = “what URL?”
// Controllers = “what to do?”
const {
  getUsers,
  createUser,
  getUserById
} = require("../controllers/userController");

// Define routes:
// GET /users → returns all users
router.get("/", getUsers);

// POST /users → creates a new user
router.post("/", createUser);

// GET /users/:id → returns a specific user by id
router.get("/:id", getUserById);

// Export the router so it can be used in app.js
module.exports = router;


// Summary:
// This file defines the routes for user-related API endpoints. 
// It imports the controller functions that contain the business 
// logic and maps specific HTTP methods and URL patterns to those functions. 
// For example, a GET request to /users will trigger the getUsers function, 
// while a POST request to /users will trigger the createUser function. 
// The router is then exported for use in the main app.js file, where it 
// will be integrated into the Express application.


// 🧩 Big Picture First
// app.js
//   ↓
// userRoutes.js
//   ↓
// userController.js
//   ↓
// Database (Prisma / SQLite)


