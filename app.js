const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk')




const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('mafkk@yahoo.com'));


const greenMsg = chalk.green.bold.inverse('Succsess..!')
console.log(greenMsg);