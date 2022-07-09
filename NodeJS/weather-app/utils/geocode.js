const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=0393269fe71464ec869fa5c968233972&query='+address
        request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.data[0].length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude:body.data[0].longitude,
                location: body.data[0].region, 
                location: body.data[0].country
            })
            
        }
    })
}
module.exports = geocode