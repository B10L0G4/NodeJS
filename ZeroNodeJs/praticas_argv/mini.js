//Exemplo de uso do minimist para extrair um argumento
const args = minimist(process.argv.slice(2))
const name = args['name']
const profis = args['profissão']
console.log(name, profis)

// modulo minimist (npm i minimist ) auxilia na extração de argumentos passados por linha de comando, ou seja não sera mais necessario fazer o slice para extrair o argumento da linha de comanhdo