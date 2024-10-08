/*
Create a program that reads 5 numbers and prints if the number is negative or positive

Create a program that:

    Reads the 5 numbers you want
    Print if a number is negative or positive
    Input example: 4, 6, -11, -4, 9
    Ouput: "Positive", "Positive", "Negative", "Negative", "Positive",

*/

const numbers = [4, 6, -11, -4, 9];

let i = 0;

let array = [];

while (i < numbers.length)
{
    if (numbers[i] > 0)
    {
        array.push("Positive");
    }
    else
    {
        array.push("Negative");
    }
    i++;
}

console.log(array);
