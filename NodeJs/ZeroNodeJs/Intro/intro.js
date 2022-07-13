// Core modules 

const fs = require('fs') // chamada de modulo, file system 

fs.readFile('core.txt','utf8', (err, data)=> {
    if (err){
        console.log(err)
    }
console.log(data)
})
// -- ver a diferença entre readfile e readfilesync --
// utf8 para ler caracteres especiais 