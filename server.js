require("dotenv").config()
const express = require("express")
const ejs = require("ejs")
const data = require(`${__dirname}/data/routes_all.js`)
const Courses = require(`${__dirname}/data/courses.js`)
let allCourses = Courses.data

// Setting up initial express server
const app = express()
app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static("static"))

// When under live development
plumb = false;
if(plumb){
  app.get('/', (req, res) => {
    res.render("underConstruction", {name: "Admissions || The Jamia Review"})
  })
}

const routes_category = ['/ba', '/management', '/btech', '/bsc', '/bed', '/bvoc', '/bfa', '/medical', '/barch']

for(let i=0; i<routes_category.length; i++){
  const allCourses = Courses.data[i]
  app.get(routes_category[i], (req, res) => {
    
    res.render('category_detail', {name: allCourses.name, allCourses, pt:i})
  })
}

app.get('/', (req, res) => {
  res.render('main', {name: "Admissions || The Jamia Review", allCourses})
})

// Setting up page routes
for(let i=1; i<data.length; i++){
  app.get(data[i].route, (req, res) => {
    res.render("details", data[i].options);
  })
}

// Firing up (listening to) the exress server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});