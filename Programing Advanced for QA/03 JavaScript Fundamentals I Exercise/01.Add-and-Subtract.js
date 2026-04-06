
function desider(inputNums) {
        let newArray = [];
        let addNums = 0;
        let subtractNums = 0;
   
    for (let i = 0; i < inputNums.length; i++) {
        addNums += inputNums[i]

        if (inputNums[i] % 2 == 0 ) {
            let adds = inputNums[i] + i;
            subtractNums += adds;
            newArray.push(adds);
        }
        else {
            let adds = inputNums[i] - i;
            subtractNums += adds;
            newArray.push(adds);
        }
    }

    console.log(newArray);
    console.log(addNums);
    console.log(subtractNums);

}

desider([5, 15, 23, 56, 35]);