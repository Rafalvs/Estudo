/*
Create two variables a and b, and initially set them each to a different number. Write a program that swaps both values.

Example: a = 10, b = 20
Output: a = 20, b = 10
*/

let x = 10;
let y = 20;

let a = x;
let b = y;

if (a < y) // (10 is less than 20?)
{
    while (a != y)
    {
        a++;
    }

    while (b != x)
    {
        b--;
    }
}
else if (b < x) // (20 is less than 10?)
{
    while (b != x)
{
    b++;
}

while (a != y)
    {
        a--;
    }
}
else
{
    console.log("the numbers are the same");
}

x = a;
y = b;

console.log(x); // output 20
console.log(y); // output 10
