// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}]
  (https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license}) 

  ### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contribution)
  6. [Tests](#testing)
  7. [Questions](#questions)
  ### Description
  * ${data.description}
  ### Installation
  * ${data.installation}
  ### Usage
  * ${data.usage}
  ### License
  * ${data.license}
  ### Contributing
  * ${data.contribution}
  ### Tests
  * ${data.testing}
  #### Questions
  * [${data.github}](https://github.com/${data.github})
  * ${data.email}
`;
}
module.exports = generateMarkdown;

// (https://img.shields.io/badge/License-${data.license}%201.0-lightblue.svg)
// (https://img.shields.io/badge/License-${data.license}-0298c3.svg)
// (https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)
