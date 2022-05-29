var fs = require('fs');
const chalk = require("chalk");
const axios = require('axios');
const files = require('./files');

async function createfile () {

    const result = new Promise((resolve, reject) => {

        try {

            console.log(chalk.blueBright.bold("\nCreating files..........\n"));

            files.forEach((file) => {

                async function createfile() {
                    const response = await axios.get(file.data);
                    fs.writeFile(file.path, response.data, (err) => {
                        if (err) {
                            console.log(chalk.redBright("error occur while fetching file " + file + " from gist: \n " + err));
                        } else {
                            console.log(chalk.green(file.path + ' file created successfully.'));
                        }
                    });
                }

                

                createfile();

            })

            setTimeout(() => {
                console.log(chalk.greenBright.bold("\nAll Files created successfully.\n"));
            }, files.length * 1000);

            resolve(true);

        }
        catch(err)
        {
            console.log(err)
            reject(false);
        }

    });

    return result;

}

module.exports = createfile;