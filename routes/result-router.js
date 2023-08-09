const express = require("express");
const { postResults, getResults } = require("../controllers/result-controller");

const router = express.Router();

router.get("/results", getResults);

router.post("/results", postResults);

module.exports = router;
