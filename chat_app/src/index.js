const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {generateMEssages}= require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = new socketio.Server()
io.attach(server)

const port = process.env.PORT || 3002

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

let count = 0; 

// server --emit 

io.on('connection', (socket) => {
    console.log('New Websocket connected ')
    socket.emit('message',{
        createAt: new Date().getTime()
    })
    socket.emit('message',generateMEssages('Welcome!'))
    socket.broadcast.emit('message',generateMEssages('A new menber has joined!'))

    socket.on('sendMessage',(message, callback) => {
        const filter = new Filter()
        if (filter.isProfane(message)){
            return callback('Profanity is not allowed')
        }
        io.emit('message', generateMEssages(message))
        callback('Delivered')
     })
     socket.on('sendLocation',(coords, callback) => {
        io.emit('locationMessage',`https://www.google.com/maps/?q=${coords.latitude},${coords.longitude}`)
        ,callback('Delivered')
     })
     socket.on ('disconnect', ()=>{
        io.emit('message', generateMEssages('A member has left!'))
    }) 
    // socket.emit('countUpdated',count)

    // socket.on('increment', () =>{
    //     count++
    //     //socket.emit('countUpdate', count)
    //     io.emit('countUpdate', count)
    // })
})
server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})