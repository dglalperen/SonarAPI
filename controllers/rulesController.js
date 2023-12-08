const sonarService = require("../services/sonarService");

exports.getRuleInformation = async (req, res) => {
  const ruleKey = req.query.key;
  if (!ruleKey) {
    return res.status(400).send("Rule key query parameter is required");
  }

  try {
    const data = await sonarService.getRuleInformation(ruleKey);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
