
function townPosition(inputInformation) {
    let townList = [];
    
    for (const element of inputInformation) {
        let townInfo = {};

        townInfo.town = element.split(" | ")[0];
        townInfo.latitude = Number(element.split(" | ")[1]).toFixed(2);
        townInfo.longitude = Number(element.split(" | ")[2]).toFixed(2);

        townList.push(townInfo);
    }

    
    for (let i = 0; i < townList.length; i++) {
        console.log(`{ town: '${townList[i].town}', latitude: '${townList[i].latitude}', longitude: '${townList[i].longitude}' }`)
    }
}


townPosition(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])