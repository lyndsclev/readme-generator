// function that returns a license badge based on which license is passed in

// if there is no license, return an empty string
function renderLicenseBadge(license) {}

// function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {}

// function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README

function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions 
  * https://github.com/${data.github}
  * ${data.email}
  * ${data.questions}

`;
}

module.exports = generateMarkdown;

