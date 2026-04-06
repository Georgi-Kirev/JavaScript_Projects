
function phoneBook(inputString) {
    let phoneList = {};

    for (let element of inputString) {
        let name = element.split(" ")[0];
        let phoneNumber = element.split(" ")[1];
        phoneList[name] = phoneNumber;
    }

    for (let key in phoneList) {
        console.log(key + " -> " + phoneList[key]);
    }
}


phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344'])