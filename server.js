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
  fs.readFile("db/db.json", "utf8", (err, notes) => {
    if (err) throw err;
    // console.log(notes);
    return res.json(notes);
  });
});

//Worked with Jake on this post

app.post("/api/notes", function(req, res) {
  const savedNote = req.body;

  typedNote.push(savedNote);
  const typedNoteString = JSON.stringify(typedNote);

  console.log(typedNoteString);

  fs.writeFile("db/db.json", typedNoteString, function(err) {
    if (err) {
      throw err;
    }

    return res.send(savedNote);
  });
});

//refered to Jake's repo again

app.delete("/api/notes:id", function(req, res) {
  const deletedNote = parseInt(req.params.id);

  let savedNoteStringified = "";

  fs.readFile('db/db.json', 'ut8', function(err, savedNoteStringified){
    if(err){

      console.log(err)
      return

    }

    const keptNotes = JSON.parse(savedNoteStringified);

    for (let i = 0; i < keptNotes.length; i++){

      if(keptNotes[i].id === deletedNote){
        keptNotes.splice(i,1);
        savedNoteStringified = JSON.stringify(keptNotes);
      }

    }

    fs.writeFile('db/db.json', savedNoteStringified, function(err){

      if(err){

        return

      }

    });
    res.send('Got a DELETE request at /user')

  });

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
