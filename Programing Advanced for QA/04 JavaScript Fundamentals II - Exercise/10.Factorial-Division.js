
function factorial(num1, num2) {
    let result = 1;
    let result2 = 1;

    for (let i = 2; i <= num1; i++) {
        result *= i;
    }
    
    for (let i = 2; i <= num2; i++) {
        result2 *= i;
    }

    let totalResult = result / result2;
    console.log(`${totalResult.toFixed(2)}`)
}

factorial(6,2)