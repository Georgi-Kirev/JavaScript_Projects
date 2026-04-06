
function addressBook(input) {
    let addresses = {};

    for (let element of input) {
        let name = element.split(":")[0];
        let addres = element.split(":")[1];
        addresses[name] = addres;
        
    }

    let sortedKeys = Object.keys(addresses).sort();
    
    for (let key of sortedKeys) {
        console.log(key + " -> " + addresses[key]);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])