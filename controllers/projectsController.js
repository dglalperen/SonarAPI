const sonarService = require("../services/sonarService");

exports.getAllProjects = async (req, res) => {
  const organization = req.query.organization;
  if (!organization) {
    return res.status(400).send("Organization query parameter is required");
  }

  try {
    const data = await sonarService.getProjects(organization);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
