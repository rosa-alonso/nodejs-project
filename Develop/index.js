// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of your README?",
  },
  {
    type: "input",
    name: "description",
    message: "give a proper description of your repo:",
  },
  {
    type: "input",
    name: "installation",
    message: "give installation instructions here:",
  },
  {
    type: "input",
    name: "usage",
    message: "give usage instructions here:",
  },
  {
    type: "input",
    name: "contributions",
    message: "give contribution guidelines here:",
  },
  {
    type: "input",
    name: "test",
    message: "give test instructions here:",
  },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    writeFile("README.md", generateReadMe(answers));
  })

  // arrow function with curly brackets, you have to call return function, doesn't do it automatically (vs without curly brackets)
  .catch((error) => {
    console.log(error);
  });
// TODO: Create a function to write README file
function writeFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

function generateReadMe({
  title,
  description,
  installation,
  usage,
  contributions,
  test,
}) {
  return `
# ${title}
## ${description}
## ${installation}
## ${usage}
## ${contributions} 
## ${test}`;
}
