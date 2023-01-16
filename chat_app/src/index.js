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
const publicDirectorySrc = path.join(__dirname,'../src')

app.use(express.static(publicDirectoryPath))
app.use(express.static(publicDirectorySrc))

// server --emit 

io.on('connection', (socket) => {
    console.log('New Websocket connected')

    socket.on('join', (options, callback)=>{
        const {error, user} = addUser({ id:socket.id, ...options })
        if (error){
            return callback(error)
        }
        socket.join(user.room)

        socket.emit('message',generateMessages('Admin','Welcome!'))
        socket.broadcast.to(user.room).emit('message','Admin',generateMessages(`${user.username}has joined`))
        io.to(user.room).emit('roomData', {
            room:user.room,
            users:getUserInRoom(user.room)
        })
        callback()
    })

    socket.on('sendMessage',(message, callback) => {
        const user = getUser(socket.id)
        const filter = new Filter()

        if (filter.isProfane(message)){
            return callback('Profanity is not allowed')
        }
        io.to(user.room).emit('message', generateMessages(user.username, message))
        callback()
     })
     socket.on('sendLocation',(coords, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('locationMessage',generateLocations(user.username,(`https://www.google.com/maps/?q=${coords.latitude},${coords.longitude}`)))
        ,callback()
    //teste 
    })
     socket.on ('disconnect', ()=>{
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message', generateMessages, 'Admin',(`${user.username}has left!`))
            io.to(user.room).emit('roomData'),{
                users:getUserInRoom(user.room)
            }
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