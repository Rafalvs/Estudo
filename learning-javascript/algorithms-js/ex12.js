/*
You've consumed X amount of Mbps on Wikipedia and Y amount of Mbps on memes.
The cost of visiting Wikipedia is 0,10$ per Mb and the cost for watching memes is 0,05$ per Mb.
If total consumption is more than 100$ print "Too much consumption".
If watching meme consumption is greater than reading wikipedia consumption print "WOW MANY MEMES",
"SUCH LOL"(in new line).

Create a program that:

    Reads X(wikipedia Mb consupmtion) and Y(watching meme Mb consumption)
    Calculates the total consumption
    If total consumption greater than 100$ print proper message
    If watching meme consumption is greater than reading wikipedia articles print proper messages

Warning! For the greater meme consumption you will use one print statement and the output must be in seperate lines
*/

let x_consupmtion = 900;
let y_consupmtion = 2000;

let x_mb_cost = 0.10;
let y_mb_cost = 0.05;

let wikipedia_consupmtion = (x_consupmtion * x_mb_cost);
let meme_consupmtion = (y_consupmtion * y_mb_cost);

let total_consupmtion = wikipedia_consupmtion + meme_consupmtion;

if(total_consupmtion > 100)
{
    console.log("Too much consumption!");
}
if(meme_consupmtion > wikipedia_consupmtion)
{
    console.log("WOW MANY MEMES\nSUCH LOL");
}
