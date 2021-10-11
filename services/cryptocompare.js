const axios = require('axios')

const getIdBySymbol = async symbol => {
  try {
    const response = await axios.get('https://min-api.cryptocompare.com/data/all/coinlist')

    return response.data.Data[symbol.toUpperCase()].Id
  } catch (e) {
    console.error(e)
    return -1
  }
}

module.exports = {
  getIdBySymbol
}



