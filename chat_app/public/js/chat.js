const socket = io();

// Elments 
const $messageForm = document.querySelector('#message-form') 
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector("#send-location")
const $messages = document.querySelector('#messages')

const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message
    })
    $messages.insertAdjacentHTML('beforeend', html)
})
socket.on('locationMessage',(url)=>{
    console.log(url)
    const html = Mustache.render(locationMessageTemplate, {
        url
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
        console.log(position)
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, ()=> {
            $sendLocationButton.removeAttribute('disabled')
            console.log('location shared!')
        }) 
    })
})
// socket.on('countUpdated',(count) => {
//     console.log('The count has been updated', count )
// });

// document.querySelector('#increment').addEventListener('click', ()=>{
//     console.log('clicked')
//     socket.emit('increment')
// });

