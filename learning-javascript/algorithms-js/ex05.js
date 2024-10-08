/*
You are interested in buying crypto-currencies.
You want to check the current amount of money you have and
see how many coins you can buy in Bitcoin, Ethereum, and Litecoin.

Create a program that:

    Reads the total amount of money you have
    Reads the price of Bitcoin, Ethereum, and Litecoin
    Prints the amount of Bitcoin, Ethereum, and Litecoin you can buy

    Example: money = 100, bitcoin_price = 50, ethereum_price = 25, litecoin_price = 10
    Output: "With 100$ you can buy: 2 Bitcoins, 4 Ethereum, and 10 Litecoins"

(Warning! Τhe prices are made up for exercise purposes)
*/

let money = 104;

let bitcoin_price  = 55;
let ethereum_price = 25;
let litecoin_price = 10;

let n_bitcoins  = money / bitcoin_price;
let n_ethereums = money / ethereum_price;
let n_litecoins = money / litecoin_price;

console.log(`With 100$ you can buy: ${n_bitcoins.toFixed(1)} Bitcoins, ${n_ethereums.toFixed(1)} Ethereum, and ${n_litecoins.toFixed(1)} Litecoins`);
