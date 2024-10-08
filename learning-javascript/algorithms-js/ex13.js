/*
An internet cafe has 2 ways of charging. If the user is a member pays 2$/hour, Else the user pays 5$.
Find if someone is a member or not and calculate the price based on how many hours the user spend.
If the user is a member the tax is 10% else the tax is 20%.

Create a program that:

    Reads how many hours the user spend
    Check if is a member
    Add the proper tax fee
    Print the total amount the user has to pay
    Output: "The user is a member stayed 2 hours for 2$/hour plus the 10% the total amount is 4.4$"
*/

let member = false;

let hours = 5;

let memberTax = 1.1;
let notMemTax = 1.2;
let total;

if (member === true)
{
    total = (2 * hours) * memberTax;
    console.log(`The user is a member stayed ${hours} hours for 2$/hour plus the 10% the total amount is ${total}$`);
}
else
{
    total = (5 * hours) * notMemTax;
    console.log(`The user stayed ${hours} hours for 2$/hour plus the 20% the total amount is ${total}$`);
}
