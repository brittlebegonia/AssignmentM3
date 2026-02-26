let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

if (num1 === num2) {
    alert("Both numbers are equal.");
    // I WASN'T SURE WHICH I SHOULD USE
    // console.log("Both numbers are equal.");
} else if (num1 > num2) {
    alert("The larger number is: " + num1);
    // console.log("The larger number is: " + num1);
} else {
    alert("The larger number is: " + num2);
    // console.log("The larger number is: " + num2);
}