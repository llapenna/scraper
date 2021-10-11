const axios = require('axios')

const getIdBySymbol = async symbol => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=656d22b9-4755-4de2-84cc-929af07903ab')

    return response.data.data.filter(c => c.symbol === symbol)[0].id
  } catch (e) {
    console.error(e)
    return -1
  }
}

module.exports = {
  getIdBySymbol
}