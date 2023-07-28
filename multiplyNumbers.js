console.log(multiplyNumbers(8,));  //referenceError: can't access 'multiply numbers before initialization
var multiplyNumbers = function(num1,num2) {
    return num1 * num2;
};