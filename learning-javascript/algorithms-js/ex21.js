/*
Create a program that reads 5 numbers and find the average of these numbers

Create a program that:

    Reads the 5 numbers you want
    Calculates the average of these numbers
    Input example: 4, 6, 1, 4, 9
    Ouput: "the average is 4.8"

*/

const numbers = [4, 6, 1, 4, 9];

let i = 0;
let total = 0;
let average;

while (i < numbers.length)
{
    total = total + numbers[i];
    i++;
    console.log(total);
}

average = total / numbers.length;
console.log(average);
