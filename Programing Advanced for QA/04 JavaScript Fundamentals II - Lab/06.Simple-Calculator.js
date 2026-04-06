
function simpleCalculator(firstNum, secondNum, operator) {
    const result = {
        add: (firstNum, secondNum) => firstNum + secondNum,
        subtract: (firstNum, secondNum) => firstNum - secondNum,
        multiply: (firstNum, secondNum) => firstNum * secondNum,
        divide: (firstNum, secondNum) => firstNum / secondNum
    }
    console.log(result[operator] (firstNum, secondNum))
}


simpleCalculator(5,5,'multiply')