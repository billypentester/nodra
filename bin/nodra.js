#!/usr/bin/env node
import { program } from 'commander';
import inquirer from 'inquirer';
import shell from 'shelljs';
import { links } from './links.js';
import * as fs from 'fs';

program
    .version('2.0.0')
    .command("create")
    .parse(process.argv);

// ask template
inquirer.prompt([
    {
        type: 'list',
        name: 'tool',
        message: 'What tool do you want to use?',
        choices: Object.keys(links),
    },
    {
        type: 'input',
        name: 'name',
        message: 'Type name of the app:',
    }
])
    .then(async answers => {
        // check name validity 
        if (!answers.name.match(/^[a-z0-9-_]+$/)) {
            console.log('Invalid name');
            return;
        }
        // install git globally
        shell.exec('npm install -g git');
        // clone the repo from github
        shell.exec(`git clone ${links[answers.tool]} ${answers.name}`);
        // cd into the folder
        shell.cd(answers.name);
        // edit package.json
        const packageJson = JSON.parse(fs.readFileSync(`package.json`));
        const newPackageJson = {
            ...packageJson,
            name: answers.name,
            version: '0.0.1',
            author: '',
        }
        fs.writeFileSync(`package.json`, JSON.stringify(newPackageJson, null, 2));
        // remove the .git folder
        shell.rm('-rf', '.git');
        // install dependencies
        shell.exec('npm install');
    }
    )
    .catch(error => {
        console.log(error);
    });