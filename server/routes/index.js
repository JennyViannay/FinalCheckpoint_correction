// Here I define and export files where I have write routes and requests.
const tarification = require("./tarification/tarification")
const representation = require("./representation/representation")
const tour = require("./tour/tour")

module.exports = { representation, tarification, tour }