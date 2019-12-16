// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8000;

//Set ID Marker for notes

const noteIDMark = 0;

//Array for saving notes

let typedNote = [];

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

// const savedNotes = 

// Displays all saved notes
app.get("/api/notes", function(req, res) {

 fs.readFile('db/db.json','utf8', (err, notes) => {
  if (err) throw err;
  // console.log(notes);
  return res.json(notes);

});
});

// Referred to Jake's repo for the post

app.post("/api/notes", function(req, res){

  const savedNote = req.body;
  // const jsonData = JSON.stringify(savedNote);

  // let combinedNotes = [jsonData];

  typedNote.push(savedNote);
  const typedNoteString = JSON.stringify(typedNote);
  // let savedNotesStringified = "";

  // //Note id counter here

  // noteIDMark++;

  // savedNote.id = noteIDMark;

    console.log(typedNoteString);

  fs.writeFile('db/db.json', typedNoteString, function(err) {
  if (err){

throw err;

  } 

  return res.send(savedNote);

});


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});