// ler argumentos na linha de comando 

console.log(process.argv) // mostra o executavel do node, o arquivo que esta executando e argumentos que foi passado na linha de comando 

// [
//   '/usr/local/bin/node', --- executavel 
//   '/Users/vcarraro/Documents/Treinamentos/NodeJs/ZeroNodeJs/process_argv/index.js', -- arquivo
//   'nome=Vanessa' - argumento 
// ]

// Exemplo de uso para resgatar um argumento 

const args = process.argv.slice(2) // resgate do argumento 
console.log(args) 
// usamos o metodo slice para regatar apenas o argumento 

const nome = args[0].split('=')[1] // resgate do valor do argumento 
console.log(nome)

// vamos pegar o primeiro elemento e vamos dividir a string (com o split), para resgatar o valor que foi passado no argumento

const idade = args[1].split('=')[1] // resgate do valor do argumento 
console.log(idade)
console.log(`Meu nome é ${nome} e tenho ${idade} anos `)



// ``as crases sao chamadas de interpolação e permite o uso de "objetos " dentro das strings pesquisar mais sobre .