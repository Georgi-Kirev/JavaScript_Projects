

function meetings(inputString) {
    let listOfAppointments = {};

    for (let element of inputString) {
        let [day, name] = element.split(" ");

        if (listOfAppointments.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            listOfAppointments[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in listOfAppointments) {
        console.log(`${key} -> ${listOfAppointments[key]}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);