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

  // project title 
  // description
  // table of contents - links to each section of the readme 
  // installation (instructions) 
  // usage (information)
  // license - list of options (notice explaining which license in section & then badge added near the top)
  // contributing (contribution guidelines)
  // tests (test instructions)
  // questions - github profile (ask for username), email address w/instructions on how to reach user with additional questions 

function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage

  ## License 

  ## Contributing

  ## Tests

  ## Questions 


`;
}

module.exports = generateMarkdown;

