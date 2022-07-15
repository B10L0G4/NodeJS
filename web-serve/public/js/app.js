console.log('Test tag ')
//const fs = require('fs')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#local')
const messageTwo = document.querySelector('#weather')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent= 'Loading'
    messageTwo.textContent=''
    fetch (`http://localhost:3000/weather?address=${location}`).then ((response) =>{
        response.json().then((data)=>{
            if (data.error ){
                messageOne.textContent= data.error
            }else{
                messageOne.textContent= data.location
                messageTwo.textContent= data.forecast
            }    
        })
    })
})

// fetch ('http://localhost:3000/weather?address='+localsearch).then ((response, error) =>{
//     if (error){
//         return console.log({error})
//     }
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })