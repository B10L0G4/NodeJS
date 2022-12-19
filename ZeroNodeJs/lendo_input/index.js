const readline = require('readline'). createInterface ({
    input: process.stdin, // entrada de argumentos 
    output : process.stdout, // saida de argumentos 
}) // a read line lê a informação passada pelo usuario 

readline.question(  // lê a pergunta 
    'Qual sua linguagem prferida? : R: ', (language) => {  // language , recebe a resposta inserida pelo usuario
        console.log(`A minha lingaugem preferida é : ${language}`) // para interpolar usa-se ˜(crase) e {}
        readline.close()
    }
)