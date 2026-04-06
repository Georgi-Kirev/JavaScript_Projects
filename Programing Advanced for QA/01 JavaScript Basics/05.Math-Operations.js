
function calculationFunction (numberA, numberB, operator) {
    let result;
    if (operator === '+'){
        result = numberA + numberB;
    }
    else if (operator === '-'){
        result = numberA - numberB;
    }
    else if (operator === '*'){
        result = numberA * numberB;
    }
    else if (operator === '/'){
        result = numberA / numberB;
    }
    else if (operator === '%'){
        result = numberA % numberB;
    }
    else if (operator === '**'){
        result = numberA ** numberB;
    }

    console.log(result);
}


calculationFunction(5, 5, '+');
calculationFunction(2, 4, '**');