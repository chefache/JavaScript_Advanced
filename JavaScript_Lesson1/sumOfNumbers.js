function sumNumbers(firstNum, secondNum){
    let result = 0;
for(let i = Number(firstNum); i <= Number(secondNum); i++){
    result += i;
}
console.log(result);
}

sumNumbers(1, 5);