// exemplo de utilização de imports via npm 
// https://www.npmjs.com/package/validator verificando o readme do modulo é possivél encontrar informaçoes 
// e metodos para serem utilizados 

const validator = require('validator'); // utilizando validador 
const getNotes = require('../notes-app/notes.js');


const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('vanessa@example.com'));// exemplo de validação  de email true 
console.log(validator.isEmail('example.com'));// exemplo de validação de email false 

console.log(validator.isURL('http://vanessa.com'));// exemplo de validação site true 
console.log(validator.isURL('http:vanessa.com'));// exemplo de validação de site false 



 
