const express = require("express");
const router = express.Router();
const rulesController = require("../controllers/rulesController");

router.get("/", rulesController.getRuleInformation);

module.exports = router;
