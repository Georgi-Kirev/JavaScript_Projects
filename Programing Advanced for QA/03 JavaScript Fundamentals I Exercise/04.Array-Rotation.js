
function numberOfRotation(array, rotationNumber) {

    for (let i = 0; i < rotationNumber; i++) {
        let newNum = array.shift()
        array.push(newNum)
    }
    
    console.log(array.join(" "))
}

numberOfRotation([51, 47, 32, 61, 21], 2)