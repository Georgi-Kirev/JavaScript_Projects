import { workforceManagement } from '../07.Workforce-Management.js'
import { expect,assert } from "chai"

describe('Tests from workforceManagement', () => {
    describe('Tests from function recruitStaff', () => {
        // Input expectance: recruitStaff(name, role, experience)
        it ('1. Should return correct information with correct input.', () => {
            // Arrange
            let name = "Jon";
            let role = "Developer";
            let expectance = 5;
            let expected = `Jon has been successfully recruited for the role of Developer.`;
            // Act
            let actual = workforceManagement.recruitStaff(name,role,expectance);
            // Assert
            assert.equal(actual,expected)
        }),

        it ('2. Should return correct information with correct input but no experiance.', () => {
            // Arrange
            let name = "Jon";
            let role = "Developer";
            let experiance = 0;
            let expected = `Jon is not suitable for this role.`;
            // Act
            let actual = workforceManagement.recruitStaff(name, role, experiance);
            // Assert
            assert.equal(actual,expected)
        }),

        it ('3. Should return error information with incorrect role.', () => {
            assert.throw(() => workforceManagement.recruitStaff("Jon", "Plumber", 5), `We are not currently hiring for this role.`)
        })
    });

    describe('Tests from function computeWages', () => {
        // Input expectance: computeWages(hoursWorked)
        it ('1. Should return error massages with incorrect input', () => {
            assert.throw(() => workforceManagement.computeWages('Deset'), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages([]), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages(-1), "Invalid hours",)
            assert.throw(() => workforceManagement.computeWages(-20), "Invalid hours")
        }),

        it ('2. Should return correct result if input is less than 160', () => {
            // Arrange
            let input = 80;
            let expected = 1440;
            // Act
            let actual = workforceManagement.computeWages(input);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('3. Should return correct result if input is more than 160', () => {
            // Arrange
            let input = 200;
            let expected = 5100;
            // Act
            let actual = workforceManagement.computeWages(input);
            // Assert
            assert.equal(actual, expected)
        })
    });

    describe('Tests from function dismissEmployee', () => {
        // Input expectance: dismissEmployee(workforce -> array , employeeIndex -> Number)
        it('1. Should return error massages with incorrect input', () => {
            assert.throw(() => workforceManagement.dismissEmployee([], 1), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee("Ivan", 1), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee([1, 2, 3], "1"), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee([1, 2, 3], -1), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee([1, 2, 3], 20), "Invalid input")
        }),

        it ('2. Should return correct array with correct input', () => {
            // Arrange
            let workforce = ["Ivan", "Petko", "Stanislav"];
            let employeeIndex = 1;
            let expected = "Ivan, Stanislav";
            // Act
            let actual = workforceManagement.dismissEmployee(workforce,employeeIndex)
            // Assert
            assert.equal(actual, expected)
        })
    });
});