var firstInput = window.prompt("Enter first integer:");
var secondInput = window.prompt("Enter second integer:");

var firstNumber = parseInt(firstInput);
var secondNumber = parseInt(secondInput);

if (firstNumber == secondNumber){
    document.write("Both numbers are equal!")
}
else {
    if (firstNumber > secondNumber) {
        document.write("First number "+firstNumber+" is greater")
    }
    else {
        document.write("Second number "+secondNumber+" is greater")
    }
}
