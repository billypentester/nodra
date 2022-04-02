var program = require('commander');
const chalk = require("chalk");
const axios = require('axios');
const createfold = require('./foldercreation');
const createfile = require('./filecreation')
var shell = require("shelljs");


createfold().then(()=>{

  createfile().then(()=> {

    shell.exec(`cd server && npm init -y && npm set-script start "nodemon index" && npm install express hbs mongoose`);
  
  })

});