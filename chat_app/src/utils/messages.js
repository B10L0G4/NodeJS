const generateMEssages = (text)=>{
  return {
    text,
    createAd: new Date().getTime()
  }
}

module.exports = {
  generateMEssages
}