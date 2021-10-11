const axios = require('axios')

const getSupportBySymbol = async symbol => {
  try {
    const response = await axios.get('https://api.copper.co/platform/currencies')

    return response.data.currencies.filter(c => c.currency === symbol).length > 0
  } catch (e) {
    console.error(e)
    return false
  }
  
}

module.exports = {
  getSupportBySymbol
}