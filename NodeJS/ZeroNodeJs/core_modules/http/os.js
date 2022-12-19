const os = require('os')

console.log('cpus',os.cpus()) // numeros de cpus 

console.log('free',os.freemem()) // quantidade de memoria livre bits

console.log('homedir',os.homedir()) // diretorio home 

console.log('type',os.type()) // sistema operacional 