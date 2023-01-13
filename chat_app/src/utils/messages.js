const generateMessages = (username, text)=>{
  return {
    username,
    text,
    createAd: new Date().getTime()
  }
}
const generateLocations = (username, url)=>{
  return {
    username,
    url,
    createAd: new Date().getTime()
  }
}

module.exports = {
  generateMessages,
  generateLocations
}