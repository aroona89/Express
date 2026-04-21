/**
 * 🧠 CONTROLLER LAYER - Business Logic
 * ====================================
 * This file contains the "brain" of our application.
 * Controllers handle:
 *   - Processing incoming requests from routes
 *   - Applying business logic and validation
 *   - Calling the model layer to get/store data
 *   - Returning formatted responses to the client
 *
 * Controller functions follow the pattern: (req, res) => { ... }
 *   req = incoming HTTP request with data
 *   res = response object to send data back
 */

// Import the users data from our "database"
const users = require("../data/users");

// ✅ GET all users - returns the complete list of users
exports.getUsers = (req, res) => {
  // Send all users back as JSON response
  res.json(users);
};

// ✅ POST new user - creates a user and stores in array
exports.createUser = (req, res) => {
  // Extract name and email from request body (sent by frontend)
  const { name, email } = req.body;

  // Create new user object with auto-incremented id
  const newUser = {
    id: users.length,  // Simple id logic: just use array length
    name,
    email
  };

  // Add the new user to our array
  users.push(newUser);

  // Send back 201 status (Created) with the new user data
  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
};

// ✅ GET user by id - finds and returns a specific user
exports.getUserById = (req, res) => {
  // Get the id from URL parameter (e.g., /users/5 → id = 5)
  const id = parseInt(req.params.id);

  // Search for user with matching id using array.find()
  const user = users.find(u => u.id === id);

  // If user doesn't exist, send 404 error
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // User found - send it back as JSON
  res.json(user);
};