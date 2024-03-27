#! /usr/bin/env node

import inquirer from "inquirer"

const rendomnumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
{
    name : "userguessednumber",
    type: "number",
    message: "Please guess a number btween 1-6:",
}, 
]);

if(answer.userguessednumber === rendomnumber){
    console.log("congratulation! you guessed right number. ")
}else{
    console.log("you guessed wromg number")
}