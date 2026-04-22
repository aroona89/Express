//core of backend without magic, because Express.js is actually built on top of this exact thing.

// 🧠 What this code is doing (big picture)
// 👉 You are manually creating a web server using Node’s built-in http module.
// ❌ http module does NOT simulate Express
// ✅ Express is built ON TOP of the http module
// So the real relationship is:
// http (low-level, manual work, imperative) → Express (high-level abstraction)



// 👉 Node gives you a built-in module called http
// Think: “This is the engine that can send/receive requests over the internet”
const http = require("http");

// 🌐 2. Define server address
// 127.0.0.1 = localhost (your own computer)
// 3000 = port (door number)
// 👉 So your server will run at:
// http://127.0.0.1:3000
const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
// The function passed to http.createServer() will be executed when someone tries to access the server at http://
// (req, res) => {
// 👉 You manually handle EVERY request here
// 🧠 Mapping:
// HTTP - one function for ALL routes
// “Run this function for EVERY request, no matter what URL or method it is”
// So this is a single global request handler.
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type 
  // Sending response back to client
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});


// Starting server
// Listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// 🧠 Now relate to YOUR project
// You had:
// app.use("/users", userRoutes);
// 👉 That means:
// “If request starts with /users, send it to another file”
// But in raw http, YOU would have to do:
// if (req.url.startsWith("/users")) {
//   // manually call logic
// }


