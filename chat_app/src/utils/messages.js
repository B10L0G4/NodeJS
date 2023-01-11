const generateMessages = (text)=>{
  return {
    text,
    createAd: new Date().getTime()
  }
}

module.exports = {
  generateMessages
}