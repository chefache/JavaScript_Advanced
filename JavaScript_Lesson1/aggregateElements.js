function agregate(input){
    let array = input.map(Number);
    let sum = array.reduce((a, b) => a + b);
    let inverseValuesSum = array.reduce((a, b) => a + 1 / b, 0);    
    let stringConcat = array.join('');
    console.log(sum);
    console.log(Number(inverseValuesSum).toFixed(4));
    console.log(stringConcat);
}

agregate([1, 2, 3]);
