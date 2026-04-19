/// 1. Write a program that prints the numbers 1 to 4 on the same line. 

console.log("1 2 3 4");

///2. Obtain two numbers from the keyboard, compute their sum and display the result.

let num11 = parseInt(prompt("Enter first number:"));
let num22 = parseInt(prompt("Enter second number:"));

let sum = num11 + num22;
console.log("Sum =", sum);


///3. Display the following checkerboard pattern with eight print statements 

console.log("* * * * * * * *");
console.log(" * * * * * * * *");
console.log("* * * * * * * *");
console.log(" * * * * * * * *");
console.log("* * * * * * * *");
console.log(" * * * * * * * *");
console.log("* * * * * * * *");
console.log(" * * * * * * * *");


/// 4. Write a program that prints the following shapes with asterisks

console.log("*********     ***       *        *");
console.log("*       *   *     *    ***      * *");
console.log("*       *  *       *  *****    *   *");
console.log("*       *  *       *    *     *     *");
console.log("*       *  *       *    *    *       *");
console.log("*       *  *       *    *     *     *");
console.log("*       *  *       *    *      *   *");
console.log("*       *   *     *     *       * *");
console.log("*********     ***       *        *");

/// 5. Print your name initials in block letters. Construct each block letter out of the letter it represents

console.log("ZZZZZZZZZ    AAAAAAA");
console.log("      Z      A     A");
console.log("     Z       A     A");
console.log("    Z        AAAAAAA");
console.log("   Z         A     A");
console.log("  Z          A     A");
console.log(" Z           A     A");
console.log("ZZZZZZZZZ    A     A");

/// 6. Write a program that reads in the radius of a circle and prints the circleâ€™s diameter, circumference and area. Use the constant value 3.14159 for Ï€.

let radius = parseFloat(prompt("Enter radius of circle:"));
const PI = 3.14159;

let diameter = 2 * radius;
let circumference = 2 * PI * radius;
let area = PI * radius * radius;

console.log("Diameter =", diameter);
console.log("Circumference =", circumference);
console.log("Area =", area);

/// 7. Write a program that calculates the squares and cubes of the numbers from 0 to 10 and uses tabs to print the following table of values:


/*
Number  Square  Cube
0       0       0
1       1       1
2       4       8
3       9       27
4       16      64
5       25      125
6       36      216
7       49      343
8       64      512
9       81      729
10      100     1000
*/


console.log("number\tsquare\tcube");

for (let i = 0; i <= 10; i++) {
    console.log(i + "\t" + (i * i) + "\t" + (i * i * i));
}

/// 8. Write a program that prints "Hello World".
console.log("Hello World");

///9. Write a program that prints "Hello" on one line and "World" on the bottom line, using two console.log() commands.

console.log("Hello");
console.log("World");


///10. Make a program that asks for the user's name, and prints the name on the screen immediately after

let name = prompt("Enter your name:");
console.log("Your name is:", name);

//11. Write a program that prompts the user for two numbers and displays the addition, subtraction, multiplication, and division between them.

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

console.log("Addition =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);


///12. Write a program that calculates the arithmetic mean of two numbers entered by the user.  mean = firstNumber + secondNumber / 2

let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));

let meanss = (a + b) / 2;
console.log("Arithmetic Mean =", meanss);

///13. Write a program that calculates the arithmetic mean of three numbers entered by the user.  mean = firstNumber + secondNumber + thirdNumber / 3

let x = parseFloat(prompt("Enter first number:"));
let y = parseFloat(prompt("Enter second number:"));
let z = parseFloat(prompt("Enter third number:"));

let means = (x + y + z) / 3;
console.log("Arithmetic Mean =", means);

/// 14. Write a program that calculates the BMI value of a person using the formula BMI = weight/height * height.

let weight = parseFloat(prompt("Enter weight in kg:"));
let height = parseFloat(prompt("Enter height in meters:"));

let bmi = weight / (height * height);
console.log("BMI =", bmi);


/// 15. Create a program that calculates and displays the perimeter of a circle, prompting the user for the radius.

const pi = 3.14159;
let Radius = parseFloat(prompt("Enter radius of circle:"));

let perimeter = 2 * pi * Radius;
console.log("Perimeter of circle =", perimeter);


/// 16. Write a program that calculates the perimeter and area of a rectangle, using the formulas P=2*(w+l) and A=w*l, where w is the width, and l is the length

let width = parseFloat(prompt("Enter width:"));
let length = parseFloat(prompt("Enter length:"));

let perimeters = 2 * (width + length);
let areas = width * length;

console.log("Perimeter =", perimeters);
console.log("Area =", areas);

// 17. Write a program that calculates the discriminant of a quadratic equation d = b*b - 4*a*c.


let A = parseFloat(prompt("Enter value of a:"));
let B = parseFloat(prompt("Enter value of b:"));
let C = parseFloat(prompt("Enter value of c:"));

let d = (B * B) - (4 * A * C);
console.log("Discriminant =", d);

/// 18. The program prompts the user to enter the base and height of a triangle and calculates its area using the formula: Area = 12 * Base * Height. It then displays the calculated area.


let base = parseFloat(prompt("Enter base of triangle:"));
let Height = parseFloat(prompt("Enter height of triangle:"));

let Area = 12 * base * Height;
console.log("Area of triangle =", Area);


///19. This program prompts the user to enter a distance in kilometers and converts it to miles using the conversion factor: 1 kilometer is approximately equal to 0.621371 miles. It then displays the converted distance. 

let km = parseFloat(prompt("Enter distance in kilometers:"));

let miles = km * 0.621371;
console.log("Distance in miles =", miles);


/// 20. This program converts a temperature from Celsius to Fahrenheit using the formula: F=C*9/5 + 32, where F is the temperature in Fahrenheit and C is the temperature in Celsius.

let celsius = parseFloat(prompt("Enter temperature in Celsius:"));

let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Temperature in Fahrenheit =", fahrenheit);


/// 21. Write a program that swaps the values of two variables and prints the swapped values. 


let AB = prompt("Enter first value:");
let BC = prompt("Enter second value:");

let temp = AB;
AB = BC;
BC = temp;

console.log("After swapping:");
console.log("a =", AB);
console.log("b =", BC);

/// 22. Write a program that concatenates three strings and displays the resulting string.

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");
let str3 = prompt("Enter third string:");

let result = str1 + str2 + str3;
console.log("Concatenated String =", result);



/// 23. Write a program that combines the day, month, and year into a single string to display the full date in the format DD/MM/YYYY. (Input: day = 15, month = 8, year = 2023  Output: "15/08/2023")

let day = prompt("Enter day:");
let month = prompt("Enter month:");
let year = prompt("Enter year:");

let fullDate = day + "/" + month + "/" + year;
console.log("Date =", fullDate);



/// 24. Write a program that converts hours into seconds.

let hours = parseFloat(prompt("Enter hours:"));

let seconds = hours * 3600;
console.log("Seconds =", seconds);

/// 25. Write a program that displays a multiplication table for a given number. The user should enter the number, and the program should display the table from 1 to 10.


let num = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
