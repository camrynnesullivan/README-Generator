// DEPENDENCIES
var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "project-name",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "AKOL"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },

  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "using-repo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing-repo",
  },
];

inquirer.prompt(questions).then(function (response) {
  if (response.username === true) {
    console.log("Success!");
  } else {
    console.log("No username?!");
  }
});

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
