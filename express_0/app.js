// To use the Express library you call the require() function in your app.js file to include it in your application.
// Used to import modules, JSON, and local files.
const express = require("express");
// 👉 You are loading the Express library
// “I want to use Express to build a server”

const app = express();
// 👉 This creates your server
// app = your backend application

const port = 3000;
// 👉 This sets the port number for the server
//  Server will run on: http://localhost:3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 👉 When someone visits:
// http://localhost:3000/
// 👉 Server responds with:
// Hello World!

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
// 👉 This turns the server ON


// This code shows a minimal "HelloWorld" Express web application. Create a server → define one route → start it
// This imports the "express" module using require() and uses it to create a server (app) 
// that listens for HTTP requests on port 3000 and prints a message to the console explaining
// what browser URL you can use to test the server. The app.get() function only responds to 
// HTTP GET requests with the specified URL path ('/'), in this case by calling a function 
// to send our Hello World! message.
// Note: The backticks in the `Example app listening on port ${port}!` let us interpolate 
// the value of $port into the string.


// You open browser
//         ↓
// Go to http://localhost:3000
//         ↓
// Request hits server
//         ↓
// app.get("/") matches
//         ↓
// Server sends "Hello World!"
//         ↓
// Browser displays it


// express() → creates server
// app.get() → defines what happens on URL
// res.send() → sends response
// app.listen() → starts server


