// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license == 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license == 'Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '<https://opensource.org/licenses/MIT>';
  }
  else if (license == 'GNU GPL v3') {
    return '<https://www.gnu.org/licenses/gpl-3.0>';
  }
  else if (license == 'Unlicense'){
    return '<http://unlicense.org/>';
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'No License') {
    return "";
  }
  else {
    return `## License
  This application is covered under the ${license} license. More information can be found at ${renderLicenseLink(license)}`
  }
}

function renderContributing(contribute) {
  if (contribute.toLowerCase() == 'covenant') {
    return '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)';
  }
  else {
    return contribute;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}<br>${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${renderContributing(data.contributing)}
## Tests
${data.tests}
${renderLicenseSection(data.license)}
## Questions
[${data.gitHub}@GitHub](https://github.com/${data.gitHub})<br>
<${data.email}>`;
}

export default generateMarkdown;