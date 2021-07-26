const courses = require("./courses.js")
const ba = require("./ba.json")
const management = require("./management.json")
const btech = require("./btech.json")
const bsc = require("./bsc.json")
const bed = require("./bed.json")
const bvoc = require("./bvoc.json")
const bfa = require("./bfa.json")
const medical = require("./medical.json")
const barch = require("./barch.json")

const data = [
  {
    route: "/courses",
    options: courses.data
  },
  {
    route: "/ba/languages/urdu",
    options: ba.languages[0]
  },
  {
    route: "/ba/languages/turkish",
    options: ba.languages[1]
  },
  {
    route: "/ba/languages/sanskrit",
    options: ba.languages[2]
  },
  {
    route: "/ba/languages/persian",
    options: ba.languages[3]
  },
  {
    route: "/ba/languages/hindi",
    options: ba.languages[4]
  },
  {
    route: "/ba/languages/english",
    options: ba.languages[5]
  },
  {
    route: "/ba/languages/arabic",
    options: ba.languages[6]
  },
  {
    route: "/ba/languages/korean",
    options: ba.languages[7]
  },
  {
    route: "/ba/others/ba-general",
    options: ba.others[0]
  },
  {
    route: "/ba/others/geography",
    options: ba.others[1]
  },
  {
    route: "/ba/others/sociology",
    options: ba.others[2]
  },
  {
    route: "/ba/others/psycology",
    options: ba.others[3]
  },
  {
    route: "/ba/others/political-sciences",
    options: ba.others[4]
  },
  {
    route: "/ba/others/mass-media-hindi",
    options: ba.others[5]
  },
  {
    route: "/ba/others/islamic-studies",
    options: ba.others[6]
  },
  {
    route: "/ba/others/history",
    options: ba.others[7]
  },
  {
    route: "/ba/others/economics",
    options: ba.others[8]
  },
  {
    route: "/ba/others/llb",
    options: ba.others[9]
  },
  {
    route: "/management/bttm",
    options: management.data[0]
  },
  {
    route: "/management/bhm",
    options: management.data[1]
  },
  {
    route: "/management/bba",
    options: management.data[2]
  },
  {
    route: "/management/bcom",
    options: management.data[3]
  },
  {
    route: "/btech/computer-sciences",
    options: btech.data[0]
  },
  {
    route: "/btech/mechanical",
    options: btech.data[1]
  },
  {
    route: "/btech/electronics-and-communication",
    options: btech.data[2]
  },
  {
    route: "/btech/electrical",
    options: btech.data[3]
  },
  {
    route: "/btech/civil",
    options: btech.data[4]
  },
  {
    route: "/bsc/geography",
    options: bsc.data[0]
  },
  {
    route: "/bsc/instrumentation",
    options: bsc.data[1]
  },
  {
    route: "/bsc/chemistry",
    options: bsc.data[2]
  },
  {
    route: "/bsc/physics",
    options: bsc.data[3]
  },
  {
    route: "/bsc/mathematics",
    options: bsc.data[4]
  },
  {
    route: "/bsc/applied-mathematics",
    options: bsc.data[5]
  },
  {
    route: "/bsc/biotechnology",
    options: bsc.data[6]
  },
  {
    route: "/bsc/biosciences",
    options: bsc.data[7]
  },
  {
    route: "/bsc/aeronautics",
    options: bsc.data[8]
  },
  {
    route: "/bed/special-education",
    options: bed.data[0]
  },
  {
    route: "/bed/nursery-education",
    options: bed.data[1]
  },
  {
    route: "/bvoc/food-production",
    options: bvoc.data[0]
  },
  {
    route: "/bvoc/solar-energy",
    options: bvoc.data[1]
  },
  {
    route: "/bvoc/medical-electrophysiology",
    options: bvoc.data[2]
  },
  {
    route: "/bfa/sculpture",
    options: bfa.data[0]
  },
  {
    route: "/bfa/painting",
    options: bfa.data[1]
  },
  {
    route: "/bfa/applied-arts",
    options: bfa.data[2]
  },
  {
    route: "/medical/bds",
    options: medical.data[0]
  },
  {
    route: "/medical/bpt",
    options: medical.data[1]
  },
  {
    route: "/barch/regular",
    options: barch.data[0]
  },
  {
    route: "/barch/sfs",
    options: barch.data[1]
  },
]

module.exports = data