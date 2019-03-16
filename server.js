const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { check, validationResult } = require("express-validator/check");
const mongojs = require("mongojs");
const formidable = require("formidable");
const fs = require("fs");

// init
const app = express();
const port = 5000;
const db = mongojs("customerApp", ["users"]);
const ObjectId = mongojs.ObjectId;
const form = new formidable.IncomingForm();

// middleware
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup routes
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Web App listening on ${port.toString()}`);
});
