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

// Import Express and create a router
const express = require("express");
const router = express.Router();

// Import the controller functions that handle business logic
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