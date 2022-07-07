const request = require('postman-request')
const geocode = require('./geocode')

const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d6bf3dfe5c9046f6bf7180244220707&q='+ latitude +','+ longitude +'&format=json&num_of_days=1&includelocation=yes'     
request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (response.body.error) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {

                Local:response.body.data.nearest_area[0].region[0].value,
                WeatherNow:response.body.data.current_condition[0].weatherDesc[0].value,
                Tempeture: response.body.data.current_condition[0].temp_C,
                FellsLike: response.body.data.current_condition[0].FeelsLikeC,
                Latitude:response.body.data.nearest_area[0].latitude,
                longitude:response.body.data.nearest_area[0].longitude
                
            })
        }//console.log(response.body.data.nearest_area[0])
    })
}
module.exports = forecast