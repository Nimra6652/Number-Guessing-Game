#! /usr/bin/env node

import inquirer from "inquirer"

console.log("\n\Welcome To \'CodeWithNimra\' -CLI Number Guessing Game\n");

const randomNumber = Math.floor (Math.random() * 6 + 1 );

const answers = await inquirer.prompt([
    {
       name: "userGuessdNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
 
    },
]);

if (answers.userGuessdNumber ===randomNumber ){
    console.log("Congratulations! you gussed a right number.");

} else {
    console.log("Sorry! you guessed a wrong number.");
}

