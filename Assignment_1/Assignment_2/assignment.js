let largenumber1 = parseInt(prompt("Enter your 1 number"));
let largenumber2 = parseInt(prompt("Enter your 2 number"));
let largenumber3 = parseInt(prompt("Enter your 3 number"));

let largest ;

if (largenumber1>= largenumber2 && largenumber1 >= largenumber3) {
    largest  = largenumber1;
}else if(largenumber2 >= largenumber1 && largenumber2 >= largenumber3){
    largest = largenumber2
}else{
    largest = largenumber3
}
alert("Largest number is: " + largest);