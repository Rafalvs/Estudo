/*
A cell phone company has the following billing policy
	                        Fixed cost 25$
Call duration(in seconds) 	Charge($/per second)
1-500 	                    0,01
501-800 	                0,008
801+ 	                    0,005

Create a program that:

    Reads how many seconds was the calls duration
    Calculates the monthly bill for the subscriber
    Prints the total amount
    Output: "total amount: 48$"

Notice that that the charge for the first 500 seconds it's 0,01$ then for
the next 501 to 800 seconds it's 0,008 and then it's 0,005$
*/

let seconds_in_call = 400;

const first_charge  = 0.01;
const second_charge = 0.008;
const third_charge  = 0.005;

let total_amount = 25;

if (seconds_in_call < 501)
{
    total_amount = total_amount + seconds_in_call * first_charge;
}

else if (seconds_in_call > 500 && seconds_in_call < 801)
{
    total_amount = total_amount + 5 + seconds_in_call * second_charge;
}

else
{
    total_amount = total_amount + 5 + 2.3 + seconds_in_call * third_charge;
}

console.log(total_amount);
