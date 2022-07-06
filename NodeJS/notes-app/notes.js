const fs = require('fs')

const addNotes = (title, body)=>{ 
    const notes = loadNotes() // load lê as notas 
    const duplicateNotes = notes.find((notes)=>{ 
        return notes.title === title
    })
    // o find vai buscar o itens e parar no item encontrada , o oprador logio not (!) vai inverter 
    //a resposta.
    // filter examina cada item da matriz do começo ao fim independente do que acontece 
    // ao longo do caminho 
    if (!duplicateNotes) {
        notes.push({ // change notes 
            title: title,
            body: body 
        })
        saveNotes(notes) //save notes 
        console.log('New note added')
    } else {
        console.log('Note title taken!')
    }
}
// adicionando remove notes 
    const removeNotes = (title)=>{ // função para deletar itens , que eu não entendi pq funciona
        const notes = loadNotes() 
        const takeNotes = notes.filter( (notes)=>{
            return notes.title != title
        })
        saveNotes(takeNotes)        
        if (notes > takeNotes.length){ // le o comprimnto e compara as notas
            console.log('This note was deleted')
        } else {
            console.log('Note not found') 
        }
    }
    const listNotes = ()=> { // lista os titulos das notas
        const notes =loadNotes()
        console.log('Your Notes')
        notes.forEach((notes) => {
            console.log(notes.title)
        });
    }    

    const readNotes = (title)=> { // ler as notas 
        const notes = loadNotes()
        const note = notes.find((notes) => notes.title === title)
    
        if (note) {
            console.log('Note Finded: ')
            console.log(note.title)
            console.log(note.body)

        } else {
            console.log('Notes not was found')
    }
  
    
    }
    
const saveNotes =  (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=> {// faz o load e adiciona as notas  
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
    } catch (e){
        return[]
    }
}

module.exports = {

    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}