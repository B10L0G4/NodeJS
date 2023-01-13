const socket = io();
// Elments 
const $messageForm = document.querySelector('#message-form') 
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector("#send-location")
const $messages = document.querySelector('#messages')

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

//Options
//const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })
const options = location.search.split("=");
const username = options[1].split("&")[0];
const room = options[2];


socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message:message.text,
        createdAt:moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})
socket.on('locationMessage',(message)=>{
    console.log(message)
    const html = Mustache.render(locationMessageTemplate, {
        url:message.url,
        createdAt:moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})
$messageForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    $messageFormButton.setAttribute('disabled', 'disabled')
    // disable form 
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message,(error)=>{
        // enable 
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if (error){
            return console.log(error)
        }
        console.log('Message Delivered')
    })

})

$sendLocationButton.addEventListener('click', ()=>{
    if (!navigator.geolocation){
        return alert('Geolocatio is not supported .')
    }
    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, ()=> {
            $sendLocationButton.removeAttribute('disabled')
            console.log('location shared!')
        }) 
    })
})
socket.emit('join',{username, room}, (error) => {
    if (error){
        alert(error)
        location.href = '/'
    }
})
// socket.on('countUpdated',(count) => {
//     console.log('The count has been updated', count )
// });

// document.querySelector('#increment').addEventListener('click', ()=>{
//     console.log('clicked')
//     socket.emit('increment')
// });

