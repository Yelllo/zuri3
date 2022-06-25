//Declare the variables
const operatorVar = prompt("Enter the operator that you want to use(*, -, +, /)");
const number1 = prompt("Enter the first number");
const number2 = prompt("Enter the second number");
//Check for invalid inputs

//Executing if and else statement
if(operatorVar == "*"){
    result = number1 * number2;
    alert("The result is : " + result);
}

else if(operatorVar == "/"){
    result = number1 / number2; 
    alert("The result is : " + result);
}
else if(operatorVar == "-"){
    result = number1 - number2; 
    alert("The result is : " + result);
}  
else if(operatorVar == "+"){
    result = parseInt(number1) + parseInt(number2);
    alert("The result is : " + result);
}
else{
    alert("Invalid operator");
}
