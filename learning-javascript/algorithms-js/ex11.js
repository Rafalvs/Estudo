/*
You have started working and you are wondering how many things you can buy with the money you've earned.
A PS4 costs 200$, a Samsung phone 900$, a TV 500$, a game skin 9.99$

Create a program:

    Notice that you can't but half TV or 1/4 of PS4.
    Reads how many hours you've worked
    Reads your hourly income
    Prints how many items you can buy
    Output: "I can buy 4 PS4, 1 Samsung, 3 TV, 80 game skin"
*/

let salary      = 2000;
let hoursWorked = 144;

const ps4     = 200;
const samsung = 900;
const tv      = 500;
const skin    = 9.99;

let hourlyIncome = salary / hoursWorked;
hourlyIncome     = hourlyIncome.toFixed(2);

let n_ps4 = salary / ps4;
n_ps4     = Math.floor(n_ps4);

let n_samsung = salary / samsung;
n_samsung     = Math.floor(n_samsung);

let n_tv = salary / tv;
n_tv     = Math.floor(n_tv);

let n_skin = salary / skin;
n_skin     = Math.floor(n_skin);

console.log(`I can buy ${n_ps4} PS4, ${n_samsung} Samsung, ${n_tv} TV, ${n_skin} game skin.`);

console.log(`I receive ${hourlyIncome}$ per hour.`);
