// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

import fs from 'fs';
import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'Enter table of contents here:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'features',
    message: 'Enter product features here:',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'How can your product be tested?:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file has been generated successfully!');
    }
  });
}

function generateMarkdown(data) {
    const licenseBadge = data.license !== 'None' ? `![License](https://img.shields.io/badge/License-${data.license}-blue.svg)` : '';
    const licenseNotice = data.license !== 'None' ? `This project is licensed under the ${data.license} license.` : 'No license selected.';
  
    return `
  # ${data.title}
  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${licenseNotice}
  
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
  
  function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
  }
  
  init();