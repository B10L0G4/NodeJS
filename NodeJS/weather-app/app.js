//const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast,js')
// const url = 'http://api.weatherstack.com//current?access_key=335ffd6b3f9ac2bddd53710984645296&query=-32.940423,-60.725034&units=m'
// request({ url: url, json: true }, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather app')
//     } else if (response.body.error) {
//         console.log('Unale to find weather app')

//     }else {
//     console.log(response.body.location.name)
//     console.log(response.body.current.weather_descriptions[0],'.It is currently', response.body.current.temperature,'out. ','It feels like',response.body.current.feelslike,'out')
//     }
//})

//      GeoCoding//
// -------------------//
// Address -> latitude e longitude <-
// const geocodes = (address, callback)=> {
// const url= 'http://api.positionstack.com/v1/forward?access_key=0393269fe71464ec869fa5c968233972'+callback(address)
// }
//     request({url:url, json: true }, 
//         (error, response) => {
//     if (error){
//         console.log('Unable to connect')
//     }else if (response.body.error){
//         console.log('Unable to find coordinates')
//     }else {
//         callback(undefined, {
//             latitude:response.body.data[0].latitude,
//             longitude:response.body.data[0].longitude,
//             local:response.body.data[0].label
//         })
    
    //console.log('We are in: '+ local +' ,latitude: '+ latitude + ', and longitude: '+longitude)
    
   // }
// bbox me da as coordanadas minimas e maximas 
// para conseguir acessar os dados contidos em data é precisei colocar a posição no array

//}) 
geocode('Svalbar',(error, data)=> {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(78.217,15.636, (error, data)=> {  
    console.log('Error', error)
    console.log('Data', data)
})



