const axios = require('axios')

const getIdBySymbol = async symbol => {
  //const response = await axios.get('https://pro-api.coingecko.com/api/v3/coins/list')
  // try {
  //   const response = await axios.get('https://api.coingecko.com/api/v3/coins/list')
    
  //   return response.data.filter(c => c.symbol === symbol.toLowerCase())[0].id
  // } catch (e) {
  //   console.error(e)
  //   return -1
  // }

  // Coingecko APIs isn't responding
  return -1
}

module.exports = {
  getIdBySymbol
}