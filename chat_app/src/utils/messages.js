const generateMessages = (text)=>{
  return {
    text,
    createAd: new Date().getTime()
  }
}
const generateLocations = (url)=>{
  return {
    url,
    createAd: new Date().getTime()
  }
}

module.exports = {
  generateMessages,
  generateLocations
}