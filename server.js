const express = require("express");
const ejs = require("ejs");
const data = require(`${__dirname}/data/routes.js`);
require("dotenv").config();

// Setting up initial express server
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("static"));

// When under live development
plumb = false;
if(plumb){
  app.get('/', (req, res) => {
    res.render("underConstruction", {name: "Admissions || The Jamia Review"})
  })
}

app.get('/', (req, res) => {
  res.render('main', {name: "Admissions || The Jamia Review"})
})
app.get("/details", (req, res)=> {
  res.render("details", data[2].options)
})

// Setting up page routes
for(let i=0; i<data.length; i++){
  app.get(data[i].route, (req, res) => {
    res.render("details", data[i].options);
  })
}

// Firing up (listening to) the exress server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
