const inquirer = require('inquirer') 
// facilita a leitura de dados recebida pelo pela linha de comando , utilzando o metodo promise do JavaScript 

inquirer.prompt([
    {
        name: 'p1',
        message:'Qual a primeira nota R: '
    },
    {
        name: 'p2',
        message:'Qual a segunda nota? R: '
    },
])
.then((answers)=>{
    const media = ((parseInt(answers.p1)) + (parseInt(answers.p2))) / 2 // o p1 é um objeto e o answers recebe as propiedades dele 
    console.log(`Sua nota é: ${media}`)
})
.catch((err)=> console.log(err))
// then e catch sao metodos de promise , catch sera usado para rotina de error e then pode ser encadeado, as perguntas irao orinar as respoostas e o metodo then ira pegar e tratar elas como em uma argv . 
