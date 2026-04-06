
function largestNumber(numberA, numberB, numberC) {
    let biggestNumber;
    if (numberA > numberB && numberA > numberC) {
        biggestNumber = numberA;
    }
    else if (numberB > numberA && numberB > numberC) {
        biggestNumber = numberB;
    }
    else {
        biggestNumber = numberC
    }

    console.log(`The largest number is ${biggestNumber}.`);
}

largestNumber(4, 50, 30);
largestNumber(100, 10, 5);
largestNumber(2, 25, 55,5);