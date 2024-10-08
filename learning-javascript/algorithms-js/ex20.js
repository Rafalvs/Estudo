/*
Create a program that reads a number that you want to get the sum until
that number and then calculate the averge of these numbers

Create a program that:

    Reads the number you want to sum
    Calculates the sum of 1+2+3+4...+98+99+n
    Calculates the average of the sum 1+2+3+4...+98+99+n
    Input example: 100
    Output: "The average is 50.5"
*/

let x = 0;
let y = 0;
let i = 100;
let average;

while(y < i)
{  
    y += 1;
    x = y + x;
}

average = x / i;

console.log(average);
