/*
It's the end of the semester and you got your grades from three classes: Geometry, Algebra, and Physics.

Create a program that:

Reads the grades of these 3 classes (Grades range from 0 - 10)
Calculate the average of your grades
Example: Geometry = 6, Algebra = 7, Physics = 8
Output: average_score = 7
*/

const geometry = 6;
const algebra  = 3;
const physics  = 8;

let grades = [geometry, algebra, physics];

let average_score = (grades[0] + grades[1] + grades[2]) / grades.length;

console.log(average_score.toFixed(1));
