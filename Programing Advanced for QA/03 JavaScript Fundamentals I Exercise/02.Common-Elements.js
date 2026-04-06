
function arrayComparison(paramsOne, paramsTwo) {
    
    for (let i = 0; i < paramsOne.length; i++) {

        for (let j = 0; j < paramsTwo.length; j++) {

            if (paramsOne[i] === paramsTwo[j]) {
            console.log(paramsOne[i])
        }
        
        }
        
    }
}


arrayComparison(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])