const request = require('postman-request')
const geocode = require('./geocode')

const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d6bf3dfe5c9046f6bf7180244220707&q='+ latitude +','+ longitude +'&format=json&num_of_days=1&includelocation=yes'     
request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined,  "It is currently "+ body.data.current_condition[0].weatherDesc[0].value + ' and '+ body.data.current_condition[0].temp_C + " degress out.")
        }
                
            //     //Local:body.data.nearest_area[0].region[0].value,
            //    WeatherNow:body.data.current_condition[0].weatherDesc[0].value,
            //     //Tempeture: body.data.current_condition[0].temp_C,
            //     //FellsLike: body.data.current_condition[0].FeelsLikeC,
            //     //Latitude:body.data.nearest_area[0].latitude,
            //     //longitude:body.data.nearest_area[0].longitude
                 
})
}
module.exports = forecast