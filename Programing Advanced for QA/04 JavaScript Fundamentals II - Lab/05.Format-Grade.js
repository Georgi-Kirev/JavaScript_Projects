
function grades(inputString) {
    let number = inputString;
    let grade;
    if (inputString < 3.00) {
        grade = "Fail";
    } else if (inputString >= 3.00 && inputString < 3.50) {
        grade = "Poor";
    }else if (inputString >= 3.50 && inputString < 4.50) {
        grade = "Good";
    }else if (inputString >= 4.50 && inputString < 5.50) {
        grade = "Very good";
    }else if (inputString >= 5.50) {
        grade = "Excellent";
    }

    if (grade === "Fail") {
        console.log(`${grade} (${2})`)
    } else {
        console.log(`${grade} (${number.toFixed(2)})`)
    }
    
}



grades(4.50)
grades(3.33)
grades(2.99)
grades(5.99)