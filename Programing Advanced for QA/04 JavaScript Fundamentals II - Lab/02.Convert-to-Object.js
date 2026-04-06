
function convertString(inputedString) {
    let person = JSON.parse(inputedString);

    for (const element of Object.entries(person)) {
        console.log(element.join(": "))
    }
}


convertString('{"name": "George", "age": 40, "town": "Sofia"}')