/*
The exercise is almost identical to a previous exercise with a minor change.
In a company the monthly salary of an employee is calculated by minimum wage 400$ per month,
plus 20$ multiply by the employment years, plus 30$ for each employee kid,
plus 100$ if the employee didn't miss 1 day of work.

Create a program that:

    Reads the employment years
    Reads the number of each employee kids
    Prints the total amount the employee must take
    Output: "The total amount is 660$, 400$ minimum wage + 100$ for 5 years experience +
    60$ for 2 kids + 100$ for not missing a day at work"
*/


let minimum_wage = 400;
let y_bonus      = 20;
let c_bonus      = 30;
let w_bonus      = 100;

let experience = 5;
let kids       = 2;

let experience_bonus = y_bonus * experience;
let children_bonus   = c_bonus * kids;

let total_amount = minimum_wage + experience_bonus + children_bonus + w_bonus;

console.log(`The total amount is ${total_amount}$. ${minimum_wage}$ minimum wage + ${experience_bonus}$ for ${experience} experience + ${children_bonus}$ for ${kids} kids + ${w_bonus} for not missing a day at work.`);