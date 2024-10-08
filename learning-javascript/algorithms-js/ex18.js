/*
    Calculates the sum of 1+3+5+7...+99+101
    Prints the sum of 1+3+5+7...+99+101
    Output: "The sum is 2601"
*/

let x = 0;
let y = -1;

while(y < 101)
{  
    y += 2;
    x = y + x;
}

console.log(x);
