
function perfectNumber(number) {
    let numsum = 0;

    for (let i = 1; i < number; i++) {
        numsum += i;

        if (numsum == number) {
            console.log("We have a perfect number!")
            break;
        }
        if (numsum > number) {
            console.log("It's not so perfect.")
            break;
        }
    }
}

perfectNumber(1236498)