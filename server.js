// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/notes", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Basic route that sends the user first to the AJAX Page
// app.get("*", function(req, res) {
//   // res.send("Welcome to the Star Wars Page!")
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

const savedNotes = 

// Displays all saved notes
app.get("/api/notes", function(req, res) {
  return res.json(characters);
});

app.post("/api/notes", function(req, res){


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});