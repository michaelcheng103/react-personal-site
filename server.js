"use strict";
process.title = "Express-React-Server";

// npm installed modules
const express = require("express"); // Webserver framework
const bodyParser = require("body-parser"); // parses the req objects
const { check, validationResult } = require("express-validator/check"); // validate the requests
const mongoose = require("mongoose"); // API to inferface with MongoDB
const formidable = require("formidable");

// built in modules
const fs = require("fs");
const path = require("path");

// init
const app = express();
const port = process.env.PORT || 5000;
const database = "reactApp";
const uri = `mongodb://localhost:27017/${database}`;
const form = new formidable.IncomingForm();

/* MongoDB setup */
// Connection to DB
mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongoose connection opened.");
});

db.on("error", err => {
  console.log("Mongoose connection error: " + err);
});

db.on("disconnected", () => {
  console.log("Mongoose connection disconnected.");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection disconnected through app termination.");
    process.exit(0);
  });
});

// Define the Schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  id: Number,
  date: Date,
  title: String,
  snippet: String
});

// Create the model, which is the collection within MongoDB
const Post = mongoose.model("posts", PostSchema);

/* End of the MongoDB setup */

// Serve the static files from React
app.use(express.static(path.join(__dirname, "client/build")));

// Allows req.body to be recognized as json sent by client
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// REST API
app.get("/api/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      date: "Feb 19, 2019",
      title: "First Post.",
      snippet: "A snippet..."
    },
    {
      id: 2,
      date: "Feb 20, 2019",
      title: "Birthday Post.",
      snippet: "More snippets..."
    },
    {
      id: 3,
      date: "Feb 25, 2019",
      title: "Third Post.",
      snippet: "Snippety snip snip!"
    },
    {
      id: 4,
      date: "Feb 28, 2019",
      title: "Four.",
      snippet: "4!"
    },
    {
      id: 5,
      date: "March 1, 2019",
      title: "Five.",
      snippet: "5!"
    },
    {
      id: 6,
      date: "March 10, 2019",
      title: "Six.",
      snippet: "6!"
    },
    {
      id: 7,
      date: "Feb 25, 2019",
      title: "Seven.",
      snippet: "7!"
    }
  ];
  res.json(posts);
});

// Handle requests that don't match above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Web App listening on ${port}`);
});
