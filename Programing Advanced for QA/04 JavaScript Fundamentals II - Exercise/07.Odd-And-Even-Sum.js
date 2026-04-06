
function evenOddSuming(numberInput) {
    let numberToString = numberInput.toString();
    let arrayOfStrings = numberToString.split('');
    let allNums = [];
    for (const element of arrayOfStrings) {
        allNums.push(Number(element));
    }

    let even = 0;
    let odd = 0;

    for (let i = 0; i < allNums.length; i++) {
        
        if (allNums[i] % 2 == 0) {
            // Числото от тази позиция е четно и се прибавя към четни
            even += allNums[i];
        } else {
            // Числото от тази позиция е нечетно и се прибавя към нечетни
            odd += allNums[i];
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

// !!!! Второ решение: 

function evenOddSuming(numberInput) {
    let even = 0;
    let odd = 0;

    // Превръщаме числото в низ и го обхождаме директно
    String(numberInput).split('').forEach(digit => {
        let num = Number(digit);
        num % 2 === 0 ? even += num : odd += num;
    });

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}


evenOddSuming(1000435)

evenOddSuming(3495892137259234)