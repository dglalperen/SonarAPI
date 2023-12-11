const axios = require("axios");
const { SONAR_BASE_URL } = require("../constants/constants");

const SONAR_TOKEN = process.env.SONAR_TOKEN;
const DEFAULT_ORGANIZATION = process.env.DEFAULT_ORGANIZATION;

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
  console.log("retrieving rule information for rule: ", ruleKey);
  return await sonarRequest(`${SONAR_BASE_URL}/rules/show`, {
    key: ruleKey,
    organization: DEFAULT_ORGANIZATION,
  });
};
