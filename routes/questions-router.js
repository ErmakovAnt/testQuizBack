const express = require("express");
const { getQuestions } = require("../controllers/questions-controller");

const route = express.Router();

route.get("/questions", getQuestions);

module.exports = route;
