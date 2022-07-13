const yargs = require('yargs'); 

//const add = require('./utils.js');
const getNotes = require('./notes.js');
const msg = getNotes();
console.log(msg);
// não esquecer os parenteses nas chamadas de funções 

console.log(yargs.argv);
console.log(process.argv)
