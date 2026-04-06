
function  circleAreaChecker (number) {
    let circleArea;
    let inputType = typeof(number);
    if (inputType === "number") {
        circleArea = Math.pow(number, 2) * Math.PI;
        console.log(`${circleArea.toFixed(2)}`)
    }
    else {
        console.log(`We can not calculate the circle area, because we received a ${typeof(number)}.`)
    }

}

circleAreaChecker ("5")