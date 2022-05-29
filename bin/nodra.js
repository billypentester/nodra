#!/usr/bin/env node
const program = require('commander');

program
    .version('1.1.1')
    .command("create-server", "create node app")
    .parse(process.argv);