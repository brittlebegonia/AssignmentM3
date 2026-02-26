let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

if (num1 === num2) {
    console.log("Both numbers are equal.");
} else if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else {
    console.log("The larger number is: " + num2);
}