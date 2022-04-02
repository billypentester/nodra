var fs = require('fs');
const chalk = require("chalk");
const folders  = require('./folders')

async function createfold () {

    console.log(chalk.blueBright.bold("\nCreating folders...\n"));

    folders.forEach((folder)=> {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
            console.log(chalk.green(folder + ' folder created successfully.'));
        }
        else{
            console.log(chalk.yellow(folder + ' folder already exists.'));
        }
    });

    return true;

}

module.exports = createfold;
