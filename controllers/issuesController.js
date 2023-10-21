const sonarService = require("../services/sonarService");

exports.getAllIssues = async (req, res) => {
  const projects = req.query.projects;
  const additionalFields = req.query.additionalFields || "_all";

  if (!projects) {
    return res.status(400).send("Projects query parameter is required");
  }

  try {
    const data = await sonarService.getIssues(projects, additionalFields);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
