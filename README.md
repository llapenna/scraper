# scraper example

This is a sample paid task. It should take you <4 hours to complete it.

This will test your knowledge of
- Javascript
- Nodejs APIs (file system i.e. fs)
- HTTP (via axios)
- Git (basic knowledge)

For each of the assets on [trustwallet assets](https://github.com/trustwallet/assets, the goal is to output a CSV that includes the following fields:

```
    symbol, 
    name, 
    network, 
    price, 
    trustwallet_id, 
    coinmarketcap_id, 
    coingecko_id, 
    crypto_compare_id, 
    contract_address, 
    copper_supported
```

We have provided example API calls in the `index.js` file. 

You SHOULD NOT import any more libraries or dependencies into the project. All calls should be made either in your local file system (using `fs`) or using `GET` requests via axios.

## Intructions

- Ensure that you have nodejs and git installed on your machine
- Ensure that you have a github account
- Fork this repository PRIVATELY
- Run the following commands

```
    git clone {your fork URL} scraper
    cd scraper
    npm install 
    node index.js
```


To submit the results please commit all files (excluding /assets and /node_modules) to your repository. Then invite `@pellicceama` to your private forked repository for evaluation.
