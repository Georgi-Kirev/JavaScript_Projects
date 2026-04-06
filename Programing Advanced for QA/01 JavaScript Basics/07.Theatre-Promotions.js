
function ticketPrice(day, age) {
    let ticket = "Error!";
    switch (day) {
        case 'Weekday':
            if (age <= 18 && age >= 0) {
                ticket = 12;
            }
            else if (age > 18 && age <= 64) {
                ticket = 18;
            }
            else if (age > 64 && age <= 122) {
                ticket = 12;
            }
        break;

        case 'Weekend':
            if (age <= 18 && age >= 0) {
                ticket = 15;
            }
            else if (age > 18 && age <= 64) {
                ticket = 20;
            }
            else if (age > 64 && age <= 122) {
                ticket = 15;
            }
        break;

        case 'Holiday':
            if (age <= 18 && age >= 0) {
                ticket = 5;
            }
            else if (age > 18 && age <= 64) {
                ticket = 12;
            }
            else if (age > 64 && age <= 122) {
                ticket = 10;
            }
        break;
        default:
            ticket = "Error!";
            break;
    }

    if (ticket != "Error!") {
        console.log(`${ticket}$`);
    }
    else {
        console.log(ticket);
    }
    
}

ticketPrice('Holiday', 123)