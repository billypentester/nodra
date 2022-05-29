var fs = require('fs');
const chalk = require("chalk");
const folders  = require('./folders')

async function createfold () {

    const result = new Promise((resolve, reject) => {

        try{

            console.log(chalk.blueBright.bold("\nCreating folders..........\n"));

            folders.forEach((folder)=> {
            
                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder);
                    console.log(chalk.green(folder + ' folder created successfully.'));
                }
                else{
                    console.log(chalk.yellow(folder + ' folder already exists.'));
                }  

            });

            console.log(chalk.greenBright.bold("\nAll Folders created successfully.\n"));

            resolve(true);

        }
        catch(err){
            console.log(err)
            reject(false);
        } 

    });

    return result;

}

module.exports = createfold;
