
function parkingLot(carTraffic) {

    let carsInParking = new Set();
    for (let i = 0; i < carTraffic.length; i++) {

        let direction = carTraffic[i].split(", ")[0];
        let carNumber = carTraffic[i].split(", ")[1];

        if (direction === "IN") {
            carsInParking.add(carNumber);
        } else {
            // Остави в масива само колите, които НЕ са с този номер
            carsInParking.delete(carNumber);
        }
    }

    carsInParking  = Array.from(carsInParking).sort();

    if (carsInParking.length != 0) {
        for (let i = 0; i < carsInParking.length; i++) {
            console.log(carsInParking[i])
        }

    } else {
        console.log("Parking Lot is Empty");
    }

}


parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)