const courses = require("./courses.json")
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
    page: `${__dirname}/views/courses.ejs`,
    options: courses
  },
  {
    route: "/ba/languages/urdu",
    page: `${__dirname}/views/ba/languages/urdu.ejs`,
    options: ba.languages[0]
  },
  {
    route: "/ba/languages/turkish",
    page: `${__dirname}/views/ba/languages/turkish.ejs`,
    options: ba.languages[1]
  },
  {
    route: "/ba/languages/sanskrit",
    page: `${__dirname}/views/ba/languages/sanskrit.ejs`,
    options: ba.languages[2]
  },
  {
    route: "/ba/languages/persian",
    page: `${__dirname}/views/ba/languages/persian.ejs`,
    options: ba.languages[3]
  },
  {
    route: "/ba/languages/hindi",
    page: `${__dirname}/views/ba/languages/hindi.ejs`,
    options: ba.languages[4]
  },
  {
    route: "/ba/languages/english",
    page: `${__dirname}/views/ba/languages/english.ejs`,
    options: ba.languages[5]
  },
  {
    route: "/ba/languages/arabic",
    page: `${__dirname}/views/ba/languages/arabic.ejs`,
    options: ba.languages[6]
  },
  {
    route: "/ba/languages/korean",
    page: `${__dirname}/views/ba/languages/korean.ejs`,
    options: ba.languages[7]
  },
  {
    route: "/ba/others/ba-general",
    page: `${__dirname}/views/ba/others/ba-general.ejs`,
    options: ba.others[0]
  },
  {
    route: "/ba/others/geography",
    page: `${__dirname}/views/ba/others/geography.ejs`,
    options: ba.others[1]
  },
  {
    route: "/ba/others/sociology",
    page: `${__dirname}/views/ba/others/sociology.ejs`,
    options: ba.others[2]
  },
  {
    route: "/ba/others/psycology",
    page: `${__dirname}/views/ba/others/psycology.ejs`,
    options: ba.others[3]
  },
  {
    route: "/ba/others/political-sciences",
    page: `${__dirname}/views/ba/others/political-sciences.ejs`,
    options: ba.others[4]
  },
  {
    route: "/ba/others/mass-media-hindi",
    page: `${__dirname}/views/ba/others/mass-media-hindi.ejs`,
    options: ba.others[5]
  },
  {
    route: "/ba/others/islamic-studies",
    page: `${__dirname}/views/ba/others/islamic-studies.ejs`,
    options: ba.others[6]
  },
  {
    route: "/ba/others/history",
    page: `${__dirname}/views/ba/others/history.ejs`,
    options: ba.others[7]
  },
  {
    route: "/ba/others/economics",
    page: `${__dirname}/views/ba/others/economics.ejs`,
    options: ba.others[8]
  },
  {
    route: "/ba/others/llb",
    page: `${__dirname}/views/ba/others/llb.ejs`,
    options: ba.others[9]
  },
  {
    route: "/management/bttm",
    page: `${__dirname}/views/management/bttm.ejs`,
    options: management.data[0]
  },
  {
    route: "/management/bhm",
    page: `${__dirname}/views/management/bhm.ejs`,
    options: management.data[1]
  },
  {
    route: "/management/bba",
    page: `${__dirname}/views/management/bba.ejs`,
    options: management.data[2]
  },
  {
    route: "/management/bcom",
    page: `${__dirname}/views/management/bcom.ejs`,
    options: management.data[3]
  },
  {
    route: "/btech/computer-sciences",
    page: `${__dirname}/views/btech/computer-sciences.ejs`,
    options: btech.data[0]
  },
  {
    route: "/btech/mechanical",
    page: `${__dirname}/views/btech/mechanical.ejs`,
    options: btech.data[1]
  },
  {
    route: "/btech/electronics-and-communication",
    page: `${__dirname}/views/btech/electronics-and-communication.ejs`,
    options: btech.data[2]
  },
  {
    route: "/btech/electrical",
    page: `${__dirname}/views/btech/electrical.ejs`,
    options: btech.data[3]
  },
  {
    route: "/btech/civil",
    page: `${__dirname}/views/btech/civil.ejs`,
    options: btech.data[4]
  },
  {
    route: "/bsc/geography",
    page: `${__dirname}/views/bsc/geography.ejs`,
    options: bsc.data[0]
  },
  {
    route: "/bsc/instrumentation",
    page: `${__dirname}/views/bsc/instrumentation.ejs`,
    options: bsc.data[1]
  },
  {
    route: "/bsc/chemistry",
    page: `${__dirname}/views/bsc/chemistry.ejs`,
    options: bsc.data[2]
  },
  {
    route: "/bsc/physics",
    page: `${__dirname}/views/bsc/physics.ejs`,
    options: bsc.data[3]
  },
  {
    route: "/bsc/mathematics",
    page: `${__dirname}/views/bsc/mathematics.ejs`,
    options: bsc.data[4]
  },
  {
    route: "/bsc/applied-mathematics",
    page: `${__dirname}/views/bsc/applied-mathematics.ejs`,
    options: bsc.data[5]
  },
  {
    route: "/bsc/biotechnology",
    page: `${__dirname}/views/bsc/biotechnology.ejs`,
    options: bsc.data[6]
  },
  {
    route: "/bsc/biosciences",
    page: `${__dirname}/views/bsc/biosciences.ejs`,
    options: bsc.data[7]
  },
  {
    route: "/bsc/aeronautics",
    page: `${__dirname}/views/bsc/aeronautics.ejs`,
    options: bsc.data[8]
  },
  {
    route: "/bed/special-education",
    page: `${__dirname}/views/bed/special-education.ejs`,
    options: bed.data[0]
  },
  {
    route: "/bed/nursery-education",
    page: `${__dirname}/views/bed/nursery-education.ejs`,
    options: bed.data[1]
  },
  {
    route: "/bvoc/food-production",
    page: `${__dirname}/views/bvoc/food-production.ejs`,
    options: bvoc.data[0]
  },
  {
    route: "/bvoc/solar-energy",
    page: `${__dirname}/views/bvoc/solar-energy.ejs`,
    options: bvoc.data[1]
  },
  {
    route: "/bvoc/medical-electrophysiology",
    page: `${__dirname}/views/bvoc/medical-electrophysiology.ejs`,
    options: bvoc.data[2]
  },
  {
    route: "/bfa/sculpture",
    page: `${__dirname}/views/bfa/sculpture.ejs`,
    options: bfa.data[0]
  },
  {
    route: "/bfa/painting",
    page: `${__dirname}/views/bfa/painting.ejs`,
    options: bfa.data[1]
  },
  {
    route: "/bfa/applied-arts",
    page: `${__dirname}/views/bfa/applied-arts.ejs`,
    options: bfa.data[2]
  },
  {
    route: "/medical/bds",
    page: `${__dirname}/views/medical/bds.ejs`,
    options: medical.data[0]
  },
  {
    route: "/medical/bpt",
    page: `${__dirname}/views/medical/bpt.ejs`,
    options: medical.data[1]
  },
  {
    route: "/barch/regular",
    page: `${__dirname}/views/barch/regular.ejs`,
    options: barch.data[0]
  },
  {
    route: "/barch/sfs",
    page: `${__dirname}/views/barch/sfs.ejs`,
    options: barch.data[1]
  },
]

module.exports = data