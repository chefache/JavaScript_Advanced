function calculateNumbers(firstNum, secondNum, operator){
let result;
switch(operator){
    case '+': result = firstNum += secondNum;  break;
    case '-': result = firstNum -= secondNum;  break;
    case '/': result = firstNum /= secondNum;  break;
    case '*': result = firstNum *= secondNum;  break;
    case '%': result = firstNum % secondNum;  break;
    case '**': result = firstNum **= secondNum;  break;
 }
console.log(result);
}
calculateNumbers(22103, 22, '%');