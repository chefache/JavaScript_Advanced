function calculate(fruit, grams, price) {
    let kilos = (grams / 1000);
    let moneyNeeded = (kilos * price);
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}

calculate('orange', 1563, 2.35);