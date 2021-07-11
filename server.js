const express = require("express");
const ejs = require("ejs");
const data = require(`${__dirname}/data/routes.js`)

// Handling environment variables
require("dotenv").config();

// Setting up initial express server
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("static"));

// When under live development
// plumb = true;
// if(plumb == true){
//   app.get('/', (req, res) => {
//     res.render("underConstruction")
//   })
// }

app.get('/', (req, res) => {
  res.render('main')
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
