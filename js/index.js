const inquirer = require("inquirer");
const fs = require("fs"); 
const licenses = require("./licenses.js");

const generateReadme = (answers) => 
    `# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License 
${answers.license}

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}`;


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
        choices: licenses.licenseOptions,
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
    fs.writeFile('../readme/README.md', generateReadme(response), errorFunction);
  }
  );

