const inquirer = require("inquirer");
const fs = require("fs"); 
const licenses = require("./js/licenses.js");

const generateReadme = (answers) => 
    `# ${answers.title} ${licenses.getBadge(answers.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Contact](#contact)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License 
This project is covered under the ${answers.license}: ${licenses.getBadge(answers.license)}

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}

## Contact
Email: ${answers.email}\n
GitHub: [${answers.github}](https://github.com/${answers.github}/)`;


inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: function(email)
        {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    },    
    {
        type: 'input',
        message: 'Title: What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description: Write a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation: Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage: Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License: Select the license which covers your project.',
        choices: licenses.licensesOptions,
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contributing: Include guidelines for how to contribute, if applicable.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Tests: Provide instructions on how to run tests on your application, if applicable.',
        name: 'tests',
    },
  ])
  .then((response) => {
    const errorFunction = (err) => err ? console.error(err) : console.log('Commit logged!');
    fs.writeFile('./readme/README.md', generateReadme(response), errorFunction);
  }
  );

