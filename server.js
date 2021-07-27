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

for(let index=0; index<routes_category.length; index++){
  const allCourses = Courses.data[index]
  app.get(routes_category[index], (req, res) => {

    var start = 0;
    var baOthersStart = 0;
    var end = 0;
      switch(req.originalUrl){
        case '/ba': start=1; baOthersStart=9; end= 18; break;
        case '/management': start=19; end=22; break;
        case '/btech': start=23; end=27; break;
        case '/bsc': start=28; end=36; break;
        case '/bed': start=37; end=38; break;
        case '/bvoc': start=39; end=41; break;
        case '/bfa': start=42; end=44; break;
        case '/medical': start=45; end=46; break;
        case '/barch': start=47; end=48; break;
        default: console.log('something went wrong')
      }
    res.render('category_detail', {name: allCourses.name, allCourses, data, start:start, end:end, baOthersStart:baOthersStart})
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