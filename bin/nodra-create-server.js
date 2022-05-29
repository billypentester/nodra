var program = require('commander');
const chalk = require("chalk");
const axios = require('axios');
const createfold = require('./create-server/foldercreation');
const createfile = require('./create-server/filecreation')
var shell = require("shelljs");


const createServer = async () => {

    try {

        console.log(chalk.yellowBright.bold("\n---------- Creating server ---------\n"));

        const gfold = await createfold();

        if(gfold)  
        {

            const gfile = await createfile();

            if(gfile) {

                setTimeout(() => {
                    shell.cd('server')
                    shell.exec('npm init -y', {silent:true });
                    shell.exec('npm set-script start "nodemon index"', {silent:true })
                    console.log(chalk.greenBright.bold("\n---------- Server created successfully ---------\n"));
                    const result = shell.exec('npm install express hbs mongoose dotenv cookie-parser jsonwebtoken nodemon --save', {silent:false }).stdout
                    console.log(result);
                    const runing = shell.exec('npm start', {silent:false });
                    console.log(runing.stdout);
                }, 5000);
                
            }
            else{
                console.log(chalk.redBright.bold("\n---------- File creation failed ---------\n"));
            }

        }
        else{
            console.log(chalk.redBright.bold("\n---------- Folder creation failed ---------\n"));
        }

    } 
    catch (err) {
        console.log(chalk.redBright.bold("\nUnexpected error occur..........\n"));
        console.log(err)
    }

}

createServer();