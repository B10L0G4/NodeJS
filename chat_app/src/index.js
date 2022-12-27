const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { count } = require('console')


const app = express()
const server = http.createServer(app)
const io = new socketio.Server()
io.attach(server)

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New Websocket connected ')
    socket.emit('countUpdated',count)
})
// teste de commit 

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})