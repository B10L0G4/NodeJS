const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt ([
    {
        name:'name',
        message: 'Whats your name? ',  
    },
    {
        name:'age',
        message:'How old are you? ',
    }
]).then((answers)=>{
    console.log(chalk.bgYellow.black(`I am ${answers.name},${answers.age} years old`))
})

.catch((err)=> console.log(err))
