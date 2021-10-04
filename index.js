// TODO: Include packages needed for this application
import { writeFile } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'gitHub',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your e-mail?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What's must be done to install your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "How is your project used?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How should others contribute? (Enter 'Covenant' for Industry Standard)",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter test instructions.",
    },
    {
        type: 'list',
        name: 'license',
        message: "What's your license?",
        choices: ['MIT', 'GNU GPL v3', 'Unlicense', 'No License'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        else {
            console.log("Success!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers)
        })
        .catch((err) => {
            if (err.isTtyError) {
              return console.log(err);
            }
            else {
              return console.log(err);
            }
        });
}

// Function call to initialize app
init();
