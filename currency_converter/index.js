#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    PKR: 277.83,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.62,
    SAR: 3.75,
    AED: 3.67,
    KWD: 0.31,
    JPY: 153.01,
    CNY: 7.24,
};
let input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select your currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR", "AED", "KWD", "JPY", "CNY"],
    },
    {
        name: "to",
        type: "list",
        message: "Select your currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR", "AED", "KWD", "JPY", "CNY"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter your amount to convert",
    },
]);
let fromcurrency = currency[input.from];
let tocurrency = currency[input.to];
let amount = input.amount;
let basecurrency = amount / fromcurrency;
let convertedcurrency = basecurrency * tocurrency;
console.log(chalk.bold.magenta(convertedcurrency.toFixed(3)));
