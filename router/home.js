const express = require("express");
const homeRouter = express.Router();
const {home} = require("../controllers/home")

homeRouter.get("", home)

module.exports = {homeRouter}