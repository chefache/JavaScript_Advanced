function check(number){
    let istrue = true;
    let numAsString = number.toString();
    let sum = 0;

for (let index = 0; index < numAsString.length; index++) {
    let currentNum = numAsString[index];
    sum += Number(currentNum);
   if (numAsString[index] !== numAsString[index + 1] && numAsString[index + 1] !== undefined) {
       istrue = false;
   } 
}
return `${istrue}\n${sum}`;
}
console.log(check(2222222));
console.log(check(113111));