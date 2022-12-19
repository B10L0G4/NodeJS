//modulo externo
const minimist = require('minimist')
//modulo interno 
const sun = require('./sun').sun // forma mais simples de usar a função externa

const args = minimist(process.argv.slice(2))
//sun (2,4) exemplo de chamada simples da função 

const a = parseInt(args['a']) // parseInt converte uma String em Inteiro
const b = parseInt(args['b']) // nota não 
sun(a,b) 

setTimeout(()=>{
    console.clear()
},2000) // limpa o console depois de 2 segundo 