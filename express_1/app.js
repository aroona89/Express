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
// express → helps you create server
// path → helps handle file paths safely
const express = require("express");
const path = require("path");

// Create Express application
// 👉 This creates your backend server
// Think: “Okay, I now have a server ready to receive requests”
const app = express();

// Import user routes
// 👉 You are saying: “All /users api end points related logic is written somewhere else — go get it”
const userRoutes = require("./routes/userRoutes");

// ⚙️ MIDDLEWARE - Functions that process every incoming request
// When frontend sends:
// fetch("/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "Ali", email: "ali@email.com" }),
// });
// 📦 What actually arrives at backend
// Without middleware: req.body → raw stream / undefined (not parsed)
// 👉 Server cannot understand it directly
// ⚙️ What app.use(express.json()) does
// app.use(express.json());
// 👉 It: Reads incoming request body
// Parses JSON string
// Converts it into JavaScript object
app.use(express.json());

// Serve static files (HTML, CSS, JavaScript) from current directory
// __dirname is a special variable in Node.js that gives you the absolute path of the directory where the current file (app.js) is located.
// __dirname → “The folder where this current file (app.js) exists”
// 💡 MIDDLEWARE TIMING: This doesn't "declare consent"—it activates AUTOMATICALLY on every incoming request.
//    For ANY request, express.static() checks if a matching file exists in __dirname. If found, it serves the file.
//    If not found (e.g., /users route), it passes the request to the next handler. No explicit routing needed.
app.use(express.static(__dirname));

// 🛣️ ROUTES - Map specific URLs to our route handlers
// Any request to /users goes to userRoutes (GET, POST, GET/:id)
// ❌ Not this: “middleware is only validation or authentication”
// ✅ Correct: Middleware = anything that runs between request and response
// Router middleware is responsible for directing traffic to the right controller function based on the URL and HTTP method.
app.use("/users", userRoutes);

// Home route - serves the index.html file
// 💡 IMPORTANT: This route ONLY handles GET / and sends the HTML. It does NOT serve CSS/JS/image dependencies.
//    When the browser loads index.html and encounters <script src="index.js">, it makes a new request (GET /index.js).
//    Without app.use(express.static()), that request will 404. You NEED BOTH to fully work: this route + static middleware.
app.get("/", (req, res) => {
  //   1️⃣ __dirname
  // __dirname = current folder where app.js is located
  // So if your project is:
  // project/
  //  ├── app.js
  //  ├── index.html
  // 👉 __dirname = project/
  // 2️⃣ path.join(...)
  // path.join(__dirname, "index.html")
  // 👉 Builds a safe file path:
  // project/index.html
  // ✔ Works on Windows + Linux safely
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🚀 START SERVER - Listen on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// 📝 SUMMARY:
// app.js
// 👉 Entry point + server setup (Controller layer dispatcher)
// It doesn’t contain business logic — it connects everything together.
// 🧩 Think of it like a traffic controller
// Incoming Request → app.js → routes → controller → response
