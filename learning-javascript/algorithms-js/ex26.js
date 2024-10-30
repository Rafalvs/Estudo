/*
Create a program that read values of apartments you want to rent until the inpute value is 0 or a negative number.

You will calculate the average price for rent and how many apartments you've registered. Print the proper message.

Then compare values of apartments you want to rent with the avarage price of the apartments you've
registered until you enter 0 or a negative value.

If the price is above average price print the proper message, else if the price is below average print the proper message.
If the input value is 0 or a negative number, print the proper message and exit.

Create a program that:

    Reads values until user inputs 0 or a negative value
    Calculates the average price
    Counts how many apartments registered
    Prints the average price and how many apartments registered
    Reads prices and compare with the average price and print proper message
    Input: 234, 764, 123, 654
    Output: "4 apartments have registed. The average price for rent is 443.75$"
    Input: 500, 200, 350, 450, 0, -7
    Output: "Above average price", "Above below price", "Above below price", "Above average price", "Quit Program","Quit Program"
*/

const inputs = [234, 764, 123, 654];
const secondInputs = [500, 200, 350, 450];

// while (x > 0)

let averageAP = (inputs[0] + inputs[1] + inputs[2] + inputs[3]) / inputs.length;

let averageCompare = (secondInputs[0] + secondInputs[1] + secondInputs[2] + secondInputs[3]) / secondInputs.length;

let lengthAP = inputs.length;

console.log(`${lengthAP} apartments have registered. The average price for rent is ${averageAP}$.`);

if (averageAP > averageCompare)
{
    console.log("Above average price");
}
else if (averageAP < averageCompare)
{
    console.log("Above below price");
}