// ================== PROGRAM 1 ==================
{
let num = parseInt(prompt("Enter your Number"));
if (num % 2 === 0) console.log("The number is Even.");
else console.log("The number is Odd.");
}

// ================== PROGRAM 2 ==================
{
let age = parseInt(prompt("Enter your age"));
if (age >= 18) console.log("Eligible");
else console.log("Not Eligible");
}

// ================== PROGRAM 3 ==================
{
let numbers = parseInt(prompt("Enter your number"));
if (numbers > 0) console.log("Positive");
else if (numbers < 0) console.log("Negative");
else console.log("Zero");
}

// ================== PROGRAM 4 ==================
{
let a = parseInt(prompt("Enter number 1"));
let b = parseInt(prompt("Enter number 2"));
let c = parseInt(prompt("Enter number 3"));
let sum = a + b + c;
if (sum > 0) console.log("Positive");
else if (sum < 0) console.log("Negative");
else console.log("Zero");
}

// ================== PROGRAM 5 ==================
{
let n1 = parseInt(prompt("Enter number 1"));
let n2 = parseInt(prompt("Enter number 2"));
if (n1 > n2) console.log("Bigger:", n1);
else if (n2 > n1) console.log("Bigger:", n2);
else console.log("Both equal");
}

// ================== PROGRAM 6 ==================
{
let x = parseInt(prompt("Enter number 1"));
let y = parseInt(prompt("Enter number 2"));
let z = parseInt(prompt("Enter number 3"));
let largest;
if (x >= y && x >= z) largest = x;
else if (y >= x && y >= z) largest = y;
else largest = z;
console.log("Largest:", largest);
}

// ================== PROGRAM 8 ==================
{
let i1 = parseInt(prompt("Enter first integer"));
let i2 = parseInt(prompt("Enter second integer"));
if (i1 % i2 === 0) console.log("Multiple");
else console.log("Not multiple");
}

// ================== PROGRAM 9 ==================
{
let p = parseInt(prompt("Enter first number"));
let q = parseInt(prompt("Enter second number"));
if (p > q) console.log(p + " is larger");
else if (q > p) console.log(q + " is larger");
else console.log("Equal");
}

// ================== PROGRAM 10 ==================
{
let marks = parseInt(prompt("Enter marks"));
if (marks >= 90 && marks <= 100) console.log("A");
else if (marks >= 80) console.log("B");
else if (marks >= 70) console.log("C");
else if (marks >= 60) console.log("D");
else if (marks >= 0) console.log("F");
else console.log("Invalid");
}

// ================== PROGRAM 11 ==================
{
let price = parseFloat(prompt("Enter price"));
if (price > 500) console.log("Final:", price * 1.075);
else if (price > 200) console.log("Final:", price * 1.05);
else console.log("Final:", price);
}

// ================== PROGRAM 12 ==================
{
let n = parseInt(prompt("Enter number"));
if (n % 3 === 0 && n % 5 === 0) console.log("Divisible by 3 and 5");
else console.log("Not divisible");
}

// ================== PROGRAM 13 ==================
{
let a = parseInt(prompt("Enter first"));
let b = parseInt(prompt("Enter second"));
let c = parseInt(prompt("Enter third"));
let t;
if (a > b) { t = a; a = b; b = t; }
if (a > c) { t = a; a = c; c = t; }
if (b > c) { t = b; b = c; c = t; }
console.log("Ascending:", a, b, c);
}

// ================== PROGRAM 14 ==================
{
let a = parseInt(prompt("Enter first"));
let b = parseInt(prompt("Enter second"));
let c = parseInt(prompt("Enter third"));
let sum = a + b + c;
let avg = sum / 3;
let prod = a * b * c;
let small = a;
if (b < small) small = b;
if (c < small) small = c;
let large = a;
if (b > large) large = b;
if (c > large) large = c;
console.log("Sum:", sum, "Avg:", avg, "Product:", prod, "Smallest:", small, "Largest:", large);
}

// ================== PROGRAM 15 ==================
{
let s1 = parseInt(prompt("Side 1"));
let s2 = parseInt(prompt("Side 2"));
let s3 = parseInt(prompt("Side 3"));
if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1)
console.log("Triangle possible");
else console.log("Triangle not possible");
}

// ================== PROGRAM 16 ==================
{
let age = parseInt(prompt("Enter age"));
if (age >= 0) {
if (age <= 12) console.log("Child");
else if (age <= 17) console.log("Teenager");
else if (age <= 59) console.log("Adult");
else console.log("Elderly");
} else console.log("Invalid age");
}

// ================== PROGRAM 17 ==================
{
let A = parseFloat(prompt("Enter A"));
let B = parseFloat(prompt("Enter B"));
let C = parseFloat(prompt("Enter C"));
let D = B*B - 4*A*C;
if (D > 0) console.log("Real and distinct");
else if (D === 0) console.log("Real and equal");
else console.log("Imaginary");
}

// ================== PROGRAM 18 ==================
{
let a = parseInt(prompt("Enter 1"));
let b = parseInt(prompt("Enter 2"));
let c = parseInt(prompt("Enter 3"));
let d = parseInt(prompt("Enter 4"));
let e = parseInt(prompt("Enter 5"));
let max = a;
if (b > max) max = b;
if (c > max) max = c;
if (d > max) max = d;
if (e > max) max = e;
let min = a;
if (b < min) min = b;
if (c < min) min = c;
if (d < min) min = d;
if (e < min) min = e;
console.log("Largest:", max, "Smallest:", min);
}

// ================== PROGRAM 19 ==================
{
let num = parseInt(prompt("Enter five digit number"));
console.log(
Math.floor(num/10000),"   ",
Math.floor((num%10000)/1000),"   ",
Math.floor((num%1000)/100),"   ",
Math.floor((num%100)/10),"   ",
num%10
);
}

// ================== PROGRAM 20 ==================
{
let a = parseInt(prompt("Enter first"));
let b = parseInt(prompt("Enter second"));
let diff = (a > b) ? a - b : b - a;
console.log("Absolute difference:", diff);
}

// ================== PROGRAM 21 ==================
{
let year = parseInt(prompt("Enter year"));
if (year % 400 === 0) console.log("Leap year");
else if (year % 100 === 0) console.log("Not leap year");
else if (year % 4 === 0) console.log("Leap year");
else console.log("Not leap year");
}

// ================== PROGRAM 22 ==================
{
let t = parseInt(prompt("Enter temperature"));
if (t < 10) console.log("Cold");
else if (t <= 25) console.log("Warm");
else console.log("Hot");
}

// ================== PROGRAM 23 ==================
{
let price = parseInt(prompt("Enter product price"));
let finalPrice;
if (price < 100) finalPrice = price;
else if (price <= 500) finalPrice = price * 0.9;
else finalPrice = price * 0.8;
console.log("Final price:", finalPrice);
}

// ================== PROGRAM 24 ==================
{
let n = parseInt(prompt("Enter number"));
if (n >= 50 && n <= 100) console.log("Within range");
else console.log("Out of range");
}

// ================== PROGRAM 25 ==================
let w = parseFloat(prompt("Enter weight"));
let h = parseFloat(prompt("Enter height"));

let bmi = w / (h * h);

if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi <= 24.9) {
    console.log("Normal");
}
else if (bmi <= 29.9) {
    console.log("Overweight");
}
else {
    console.log("Obese");
}
