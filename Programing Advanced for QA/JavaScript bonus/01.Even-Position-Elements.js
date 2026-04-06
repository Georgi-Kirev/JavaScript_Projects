
function evenPositionFinder(inputArray) {
    let numbers = [];

    for (let i = 0; i < inputArray.length; i++) {

        if (i % 2 == 0) {
            numbers.push(inputArray[i])
        }
    }

    console.log(numbers.join(" "))
}

evenPositionFinder(['20', '30', '40', '50', '60'])