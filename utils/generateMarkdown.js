// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
let licenseBadge; 
let licenseLink; 

function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      break;
    
    case 'GNU GPLv3':
      licenseBadge = `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`; 
      break; 

    case 'MIT':
      licenseBadge = `![License](https://img.shields.io/badge/License-MIT-blue.svg)`;
      break; 
      
    case 'ISC':
      licenseBadge = `![License](https://img.shields.io/badge/License-ISC-blue.svg)`;
      break;
    
    case 'Unlicense':
      licenseBadge = `![License](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
      break; 
    
    case 'None':
      licenseBadge = ""; 
      break; 
  }
  return licenseBadge;
};

// function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license) {
    case 'Apache License 2.0':
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    
    case 'GNU GPLv3':
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"; 
      break; 

    case 'MIT':
      licenseLink = "https://opensource.org/licenses/MIT"; 
      break; 
      
    case 'ISC':
      licenseLink = "https://opensource.org/licenses/ISC"
      break;
    
    case 'Unlicense':
      licenseLink = "http://unlicense.org/"; 
      break; 
    
    case 'None':
      licenseLink = ""; 
      break; 
  }
  return licenseLink;
};

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under ${license}. Please see ${renderLicenseLink(license)} for more information.`;
  } else {
    return `This project is not licensed.`;
  }
};

// function to generate markdown for README

function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}
  
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
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions 
  * https://github.com/${data.github}
  * ${data.email}
  * ${data.questions}

`;
};

module.exports = generateMarkdown;

