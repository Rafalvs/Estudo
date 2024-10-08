/*
You want to buy something from Amazon. The seller charges different prices for shipping cost based on location.
For US it's 5$ for Europe it's 7$ for Canada it's 3$ for other places it's 9$

Create a program that:

Reads the cost of the product
Reads your location
Print the amount of money you have to pay
Ouput: "You have to pay 23$, 20$ for the product and 3$ for shipping cost"
*/

const charge = ["US", 5, "Europe", 7, "Canada", 3];

let productPrice = 100;

let clientLocation = "US";

let total;

if (clientLocation === charge[0])
{
    total = productPrice + charge[1];
    console.log(`You have to pay ${total}$, ${productPrice}$ for the product and ${charge[1]}$ for shipping cost`);
}
else if (clientLocation === charge[2])
{
    total = productPrice + charge[3];
    console.log(`You have to pay ${total}$, ${productPrice}$ for the product and ${charge[3]}$ for shipping cost`);
}
else if (clientLocation === charge[4])
{
    total = productPrice + charge[5];
    console.log(`You have to pay ${total}$, ${productPrice}$ for the product and ${charge[5]}$ for shipping cost`);
}
else
{
    total = productPrice + 9;
    console.log(`You have to pay ${total}$, ${productPrice}$ for the product and 9$ for shipping cost`);
}
