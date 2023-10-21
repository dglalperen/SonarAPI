Certainly! Here's your code and the explanation of structuring the server along with the readme, all formatted in Markdown:

````markdown
## Server.js Code Refactoring

To keep your code organized and maintainable, especially when you plan to have many routes, it's a good practice to separate your concerns by creating different modules for your routes, controllers, and services.

### Directory Structure

```plaintext
src/
|-- controllers/
|   |-- projectController.js
|   |-- issueController.js
|-- routes/
|   |-- projectRoutes.js
|   |-- issueRoutes.js
|-- services/
|   |-- sonarService.js
|-- server.js
|-- config.js
```
````

### server.js

```javascript
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const issueRoutes = require("./routes/issueRoutes");

const app = express();

// Middleware
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/projects", projectRoutes);
app.use("/issues", issueRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### config.js

```javascript
const BASE_URL_DEV = "http://localhost:3000/api";
const SONAR_BASE_URL = "https://sonarcloud.io/api";

module.exports = {
  BASE_URL_DEV,
  SONAR_BASE_URL,
};
```

...

## README

# SonarCloud API Wrapper

This project serves as a wrapper around the SonarCloud API, aimed to facilitate interaction with SonarCloud's various resources such as projects, issues, and metrics. By encapsulating SonarCloud's API endpoints within a well-structured Express.js application, users can easily fetch, filter, and manage data from SonarCloud in a more organized and convenient manner.

## Features

- Fetching a list of all projects for a specified organization.
- Retrieving all issues from a particular project.
- (Additional features can be added as more endpoints are wrapped)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14.x or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/sonarcloud-api-wrapper.git
   cd sonarcloud-api-wrapper
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the project and populate it with the necessary environment variables:
   ```env
   PORT=3000
   SONAR_TOKEN=your-sonarcloud-api-token
   ```

### Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Once the server is running, you can make requests to the available API endpoints. For example, to fetch all projects for a specific organization, send a GET request to:
   ```http
   http://localhost:3000/projects?organization=your-organization-key
   ```

## Development

You can extend this API wrapper by adding more routes and handlers for other SonarCloud API endpoints. Organize the endpoints in a clean and structured manner by creating separate route files and services for each major resource.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the functionality of this API wrapper.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

```

```
