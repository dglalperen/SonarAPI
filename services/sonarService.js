const axios = require("axios");
const { SONAR_BASE_URL } = require("../constants/constants");

const SONAR_TOKEN = process.env.SONAR_TOKEN;

async function sonarRequest(url, params = {}) {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${SONAR_TOKEN}`,
    },
    params: {
      ...params,
    },
  });
  return response.data;
}

exports.getProjects = async (organization) => {
  return await sonarRequest(`${SONAR_BASE_URL}/projects/search`, {
    organization,
  });
};

exports.getIssues = async (projects, additionalFields) => {
  console.log("retrieving issues for project: ", projects);
  return await sonarRequest(`${SONAR_BASE_URL}/issues/search`, {
    projects,
    additionalFields,
  });
};

exports.getRuleInformation = async (ruleKey) => {
  return await sonarRequest(`${SONAR_BASE_URL}/rules/show`, {
    key: ruleKey,
  });
};
