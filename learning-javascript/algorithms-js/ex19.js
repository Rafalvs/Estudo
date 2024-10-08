/*
Create a program that reads a number that you want to get the sum until that number

Create a program that:

    Reads the number you want to sum
    Calculates the sum of 1+2+3+4...+98+99+n
    Prints the sum of 1+2+3+4...+98+99+n
    Input example: 100
    Output: "The sum is 5050"
*/

let x = 0;
let y = 0;
let i = 100;

while(y < i)
{  
    y += 1;
    x = y + x;
}

console.log(x);

// Gauss Formula 
// x = i * (i + 1) / 2;
