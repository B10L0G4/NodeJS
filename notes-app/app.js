//const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes')
const { removeNotes } = require('./notes')
const { title } = require('process')
const { describe, string, demandOption } = require('yargs')
const { type } = require('os')

// Customise yargs version === yargs.version('0.0.1'), <- versao desejada 

// Create Add command

yargs.command ({
    command:'add',
    describe: 'Add a new note ',
    builder : {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Text Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

// create a Remove 

yargs.command ({
    command: 'remove',
    describe: 'Remove a Note',
    handler(argv){
        notes.removeNotes(argv.title, argv.body)
    }
})
// comando Reading
yargs.command ({
    command:'read',
    describe:'Read a note',
    builder :{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv){
        notes.readNotes(argv.title)
    }
})
// command List 
yargs.command({
    command:'list',
    descibe: 'List the notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse();








