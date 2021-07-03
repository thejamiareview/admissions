const express = require("express");
const ejs = require("ejs");

// Handling environment variables
require("dotenv").config();


// Setting up initial express server
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("static"));

// req and response
app.get('/', (req, res) => {
  res.send("Hello")
})


// Firing up (listening to) the exress server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server is up on port ${port}`)
});
