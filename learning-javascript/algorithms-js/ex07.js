/*
In a company the monthly salary of an employee is calculated by: 
the minimum wage 400$ per month, plus 20$ multiplied by the number of years employed,
plus 30$ for each child they have.

Create a program that:

    Reads the number of years employed
    Reads the number of children the employee has
    Prints the total amount of salary the employee makes

    Output: "The total amount is 560$. 400$ minimum wage + 100$ for 5 years experience + 60$ for 2 kids"
*/

let minimum_wage = 400;
let y_bonus      = 20;
let c_bonus      = 30;

let experience = 5;
let kids       = 2;

let experience_bonus = y_bonus * experience;
let children_bonus   = c_bonus * kids;

let total_amount = minimum_wage + experience_bonus + children_bonus;

console.log(`The total amount is ${total_amount}$. ${minimum_wage}$ minimum wage + ${experience_bonus}$ for ${experience} experience + ${children_bonus}$ for ${kids} kids.`);
