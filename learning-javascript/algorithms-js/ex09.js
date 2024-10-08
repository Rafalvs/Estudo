/*
The exercise is almost identical to a previous exercise with a minor change.
It's the end of the semester and you got your marks from, Geometry, Algebra, Physics classes.
If the average score is 7 and above print "Good job!", if the average score is between 6 and 4 print
"You need to work harder!", if the average score is below 4 print "Failed, you really need to work harder!".

Create a program that:

    Reads the values of these 3 lessons
    Calculate the average of your grades
    Example: Geometry = 6, Algebra = 7, Physics = 8
    Output: Your average score is 7, Good job!"
*/

const geometry = 4;
const algebra  = 7;
const physics  = 8;

let grades = [geometry, algebra, physics];

let average = (grades[0] + grades[1] + grades[2]) / grades.length;

average = Math.round(average);

if(average >= 7)
{
    console.log(`Your average is ${average}. Good job!`);
}
else if(average >= 4 && average <= 6)
{
    console.log(`Your average is ${average}. You need to work harder!`);
}
else if (average >= 0 && average <= 3)
{
    console.log(`Your average is ${average}. Failed, you really need to work harder!`);
}
else
{
    console.log("Error");
}
