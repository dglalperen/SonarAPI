require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projectsRoute = require("./routes/projects");
const issuesRoute = require("./routes/issues");

const app = express();
app.use(cors());
app.use("/projects", projectsRoute);
app.use("/issues", issuesRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
