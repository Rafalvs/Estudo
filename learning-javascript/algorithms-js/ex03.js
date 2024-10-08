/*
You've bought a Bitcoin and now it's on the rise!!!

Create a program that:

    Reads the value of the bitcoin at the time of purchase
    Reads the percentage of increase (or decrease)
    Prints the total value of your bitcoin
    Prints the increase or decrease value

    Example: bitcoin_value = 10000, bitcoin_increase = 10
    Output: total_bitcoin_value = 11000, bitcoin_increase_value = 1000
*/

let bitcoinValue      = 10000;
let bitcoinPercentage = 50;

let percentage = (bitcoinPercentage * bitcoinValue) / 100;

let total_bitcoin_value = bitcoinValue + percentage;
let decreased_value     = bitcoinValue - percentage;

console.log("the percentage is: ", percentage);
console.log("total bitcoin value increased is: ", total_bitcoin_value);
console.log("total bitcoin value decreased is: ", decreased_value);
