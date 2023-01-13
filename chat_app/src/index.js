const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {generateMessages,generateLocations}= require('./utils/messages')
const {addUser,getUser,removeUser,getUserInRoom} =require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
//io.attach(server)

const port = process.env.PORT || 3002

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

// server --emit 

io.on('connection', (socket) => {
    console.log('New Websocket connected ')

    socket.on('join', ({username, room})=>{
        const {error, user} = addUser({ id:socket.id, username,room })
        if (error){
            return callback(error)
        }
        socket.join(user.room)

        socket.emit('message',generateMessages('Welcome!'))
        socket.broadcast.to(user.room).emit('message',generateMessages(`${user.username}has joined`))
        
        callback()
    })

    socket.on('sendMessage',(message, callback) => {
        const filter = new Filter()
        if (filter.isProfane(message)){
            return callback('Profanity is not allowed')
        }
        io.emit('message', generateMessages(message))
        callback()
     })
     socket.on('sendLocation',(coords, callback) => {
        io.emit('locationMessage',generateLocations(`https://www.google.com/maps/?q=${coords.latitude},${coords.longitude}`))
        ,callback('Delivered')
     })
     socket.on ('disconnect', ()=>{
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message', generateMessages(`${user.username}has left!`))
        } 
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