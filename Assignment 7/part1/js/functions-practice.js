//STEP 1
function halfNumber(number_1){
    return number_1/2;
}
var number_1 = parseInt(prompt("Enter a number to be halved below :"));
window.console.log("Half of "+number_1+" is "+halfNumber(number_1)+".");

//STEP 2
var square;
 function squareNumber(number){
     return number*number;
 }
 var number = parseInt(prompt("Enter a number to be squared :"));
 window.console.log("The result of squaring the number " + number + " is " + squareNumber(number)+".");

 //STEP 3
 function percentOf(number_1,number_2){
    return (number_1/number_2)*100;
}
var number_1 = parseInt(prompt("Enter First Number to calculate percentOf"));
var number_2 = parseInt(prompt("Enter Second Number to calculate percentOf"));
window.console.log(number_1+" is "+percentOf(number_1,number_2)+"% of "+number_2+".");

//STEP 4
function findModulus(number_1,number_2){
    return number_2%number_1;
}
var number_1 = parseInt(prompt("Enter First Number to calculate Modulus:"));
var number_2 = parseInt(prompt("Enter Second Number to calculate Modulus :"));
window.console.log(findModulus(number_1,number_2)+" is the modulus of "+number_1+" and "+number_2+".");

//STEP 5
var arr = prompt("Enter numbers seperated by commas for addition :");
var Num_arr = arr.split(",");
for(var i=0;i<Num_arr.length;i++){
    Num_arr[i] = parseInt(Num_arr[i]);
}
function sumOfNumbers(Num_arr){
    var sum=0;
    for (var j=0;j<Num_arr.length;j++){
        sum=sum+Num_arr[j];
    }
    return sum;
}
var sum = sumOfNumbers(Num_arr);
window.console.log("Sum of " +arr+ " is "+sum+".");