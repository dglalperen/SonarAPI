const express = require("express");
const router = express.Router();
const rulesController = require("../controllers/rulesController");

router.get("/", rulesController.getRulesInformation);

module.exports = router;
