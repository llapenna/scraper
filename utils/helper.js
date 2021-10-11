const fs = require('fs')

// services
const coingeckoService = require('../services/coingecko')
const coinmarketcapService = require('../services/coinmarketcap')
const copperService = require('../services/copper')
const cryptocompareService = require('../services/cryptocompare')

const formatCryptoObject = async basicInfo => {
  console.log('Evaluating ', basicInfo.name)

  const coingecko_id = await coingeckoService.getIdBySymbol(basicInfo.symbol)
  const coinmarketcap_id = await coinmarketcapService.getIdBySymbol(basicInfo.symbol)
  const crypto_compare_id = await cryptocompareService.getIdBySymbol(basicInfo.symbol.toUpperCase())
  const copper_supported = await copperService.getSupportBySymbol(basicInfo.symbol)

  // It could be more performant to use a Promises.all() to wait for all the promises in parallel,
  // but this has to be tested

  const object = {
    ...basicInfo,
    coingecko_id,
    coinmarketcap_id,
    crypto_compare_id,
    copper_supported
  }

  return object
}

const createCSV = crypto => {  
  const header = Object.keys(crypto).join(',')
  const body = Object.values(crypto).join(',')

  return `${header}\n${body}`
}

const writeCSV = crypto => {
  const resultsFolder = `${process.cwd()}\\results\\${crypto.path}`

  // check if the folder exists
  if (!fs.existsSync(resultsFolder))
    fs.mkdirSync(resultsFolder)

  // check if the result file already exists
  if(fs.existsSync(resultsFolder + '\\results.csv')) {
    fs.unlinkSync(resultsFolder + '\\results.csv');
  }

  fs.writeFileSync(resultsFolder + '/results.csv', crypto.csv);
}

module.exports = {
  createCSV,
  writeCSV,
  formatCryptoObject
}