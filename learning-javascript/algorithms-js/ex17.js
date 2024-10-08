/*
Create a program that:

    Calculates the sum of 1+2+3+4...+98+99
    Prints the sum of 1+2+3+4...+98+99
    Output: "The sum is 4950"

*/

let x = 0;
let y = 0;

while(y < 99)
{  
    y += 1;
    x = y + x;
}

console.log(x);
