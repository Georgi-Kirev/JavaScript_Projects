
function merger(paramsOne, paramsTwo) {
    let thirdArray = [];

    for (let i = 0; i < paramsOne.length; i++) {

        for (let j = 0; j < paramsTwo.length; j++) {

            if (i % 2 == 0) {

                thirdArray.push(Number(paramsOne[i]) + Number(paramsTwo[i]))
                break;
            } else {
                thirdArray.push(String(paramsOne[i]) + String(paramsTwo[i]))
                break;
            }
        }
    }
    
    console.log(thirdArray.join(" - "))
}

merger(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])