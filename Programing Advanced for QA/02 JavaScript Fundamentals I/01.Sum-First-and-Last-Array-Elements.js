
function sumElements(input) {
    let firstElement = parseInt (input[0]);
    let lastElement = parseInt( input[input.length - 1]);
    let result = firstElement + lastElement;
    console.log(result);
}

sumElements([20, 30, 40]);
sumElements([10, 17, 22, 33]);
sumElements([11, 58, 69]);
