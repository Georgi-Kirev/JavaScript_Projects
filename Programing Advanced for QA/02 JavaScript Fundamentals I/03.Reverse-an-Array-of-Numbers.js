
function newArrayReversed(n, arrayInputed) {
    let newArray = [];
    for (let i = 0; i < n; i++ ) {
        newArray[i] = arrayInputed[i];
    }

    let result = "";
    for (let i = newArray.length -1; i >= 0; i--) {
        result = result.concat(" ", newArray[i]);
    }
     console.log(result);
}

newArrayReversed(3, [10, 20, 30, 40, 50]);