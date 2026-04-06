
function employeesList(params) {
    const listOfEmployees = [];

    for (const currentEmployee of params) {
        let person = {};

        person.name = currentEmployee;
        person.personalNum = currentEmployee.length;

        listOfEmployees.push(person)
    }

    for (let i = 0; i < listOfEmployees.length; i++) {
        console.log(`Name: ${listOfEmployees[i].name} -- Personal Number: ${listOfEmployees[i].personalNum}`)
    }

}


employeesList(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])