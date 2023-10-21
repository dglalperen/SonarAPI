const express = require("express");
const router = express.Router();
const issuesController = require("../controllers/issuesController");

router.get("/", issuesController.getAllIssues);

module.exports = router;
