// packages needed for app 
const inquirer = require('inquirer');
const fs = require('fs'); 
const path = require('path')
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user input 
const questions = [
    {
        // project title 
        type: 'input', 
        name: 'title',
        message: 'Enter the title of your project (required).',
        validate: projectTitle => {
            if(projectTitle) {
                return true; 
            } else {
                console.log('Please enter the title of your project.');
                return false; 
            }
        }
    }, 
    {
        // description
        type: 'input', 
        name: 'description',
        message: 'Enter a description for your project (required).',
        validate: projectDescription => {
            if(projectDescription) {
                return true; 
            } else {
                console.log('Please enter a description for your project.');
                return false; 
            }
        }
    }, 
    {
        // installation (instructions) 
        type: 'input', 
        name: 'installation',
        message: 'Provide a step-by-step description of how to install your project (required).',
        validate: projectInstallation => {
            if(projectInstallation) {
                return true; 
            } else {
                console.log('Please explain how to install your project.');
                return false; 
            }
        }
    }, 
    {
        // usage (information)
        type: 'input', 
        name: 'usage',
        message: 'Provide instructions and examples for using your application (required).',
        validate: projectUsage => {
            if(projectUsage) {
                return true; 
            } else {
                console.log('Please provide instructions for using your application.');
                return false; 
            }
        }
    }, 
    {
        // license - list of options (notice explaining which license in section & then badge added near the top)
        type: 'list', 
        name: 'license',
        message: 'Choose a license for your application (required).',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'None']
    }, 
    {
        // contributing (contribution guidelines) 
        type: 'input', 
        name: 'contributing',
        message: 'List your collaborators and any third-party assets used (required).',
        validate: projectContributing => {
            if(projectContributing) {
                return true; 
            } else {
                console.log('Please list your collaborators and any third-party assets used. If none, please specify "Not applicable".');
                return false; 
            }
        }
    }, 
    {
        // tests (test instructions)
        type: 'input', 
        name: 'tests',
        message: 'Provide tests for your application and examples on how to run them (required).',
        validate: projectTests => {
            if(projectTests) {
                return true; 
            } else {
                console.log('Please provide tests for your application. If none, please specify "Not applicable".');
                return false; 
            }
        }
    }, 
    {
        // questions - github profile (ask for username)
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (required).',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username.');
            return false;
            }
        }
    },
    {
        // questions - email address
        type: 'input',
        name: 'email',
        message: 'Enter your email address (required).',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email address.');
            return false;
            }
        }
    },
    {
        // questions - instructions on how to reach user with additional questions 
        type: 'input',
        name: 'questions',
        message: 'Enter any additional instructions on how to reach you with questions regarding your application (required).',
        validate: projectQuestions => {
            if (projectQuestions) {
            return true;
            } else {
            console.log('Please enter additional instructions on how to reach you with questions. If none, please specify "Not applicable".');
            return false;
            }
        }
    }
];

// function to write readme file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}; 

// function to initialize app
function init () {
    inquirer.prompt(questions)
    .then((answers => {
        console.log(answers);
        console.log("Generating README...");
        writeToFile("./README.md", generateMarkdown(answers), err => {
            if (err) {
                console.log(err);
                return
            }
        });
    }));
};

// function call to initialize app
init();
