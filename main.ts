

import inquirer from "inquirer";

let userInput = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "what is your name?"
        }
    ])