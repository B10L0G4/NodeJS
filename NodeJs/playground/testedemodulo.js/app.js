// crinado e adicionando arquivos de forma sincrona 
const fs = require('fs', 'appendFile');
fs.writeFileSync('notes.txt','This is a second entrance with NodeJs-testando novamente ');
// Desafio 1
// usar o metodo appendFileSync para adicionar no arquivo 
//rodar o script 
//checar se a adicioção foi efetuada com sucesso  
fs.appendFileSync('notes.txt','Fullfiling challenge One' )
// adicionando linhas de texto em um documento de forma sincrona 
