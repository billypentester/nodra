var fs = require('fs');
const chalk = require("chalk");
const axios = require('axios');
var fs = require('fs');
const files = require('./files');

async function createfile () {

    console.log(chalk.blueBright.bold("\nCreating files...\n"));

    for (let x in files) {
        axios.get(files[x].data)
        .then((response)=> {
            fs.writeFile(files[x].path,response.data, (err) => {
                if (err) throw err;
                console.log(chalk.green(files[x].path +' file created successfully.'));
            });
        })
        .catch((error)=> {
            console.log(chalk.redBright("error occur while fetching file " + files[x].path + " from gist: \n " + error));
        });
    }

    return true;

}

module.exports = createfile;