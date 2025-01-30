// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== 'None' ? `![License](https://img.shields.io/badge/License-${license}-blue.svg)` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== 'None' ? `[License](#license)` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'None' ? `
  ## License
  - This project is licensed under the ${license} license.` : 'No license selected.';
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {


  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- ${renderLicenseLink(data.license)}
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Features
${data.features}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

export default generateMarkdown;
