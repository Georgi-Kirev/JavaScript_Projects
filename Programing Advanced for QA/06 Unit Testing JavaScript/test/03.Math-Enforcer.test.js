
import { mathEnforcer } from "../03.Math-Enforcer.js";
import { assert } from "chai";

describe('Test function mathEnforcer', () => {

    describe('Test function addFive', () => {

        it('Check if it return correct result if inputed number.', () => {
            let input = 5;
            let expected = 10;
            let actual = mathEnforcer.addFive(input)
            assert.equal(actual, expected)
        }),

            it('Check if it return correct result if inputed number is 0.', () => {
                let input = 0;
                let expected = 5;
                let actual = mathEnforcer.addFive(input)
                assert.equal(actual, expected)
            }),

            it('Check if it return correct result if input and result are negative', () => {
                let input = -10;
                let expected = -5;
                let actual = mathEnforcer.addFive(input)
                assert.equal(actual, expected)
            }),

            it('Check if it return correct result if inputed floating point number.', () => {
                let input = 5.55;
                let expected = 10.55;
                let actual = mathEnforcer.addFive(input)
                assert.closeTo(actual, expected, 0.01)
            }),

            it('Check if it return undefined result if inputed string.', () => {
                let input = '5';
                let expected = undefined;
                let actual = mathEnforcer.addFive(input)
                assert.equal(actual, expected)
            }),

            it('Check if it return undefined result if inputed null.', () => {
                let input = null;
                let expected = undefined;
                let actual = mathEnforcer.addFive(input)
                assert.equal(actual, expected)
            })
    });

    describe('Test function subtractTen', () => {

        it('check if return correct result if input is positive', () => {
            let input = 20;
            let expected = 10;
            let actual = mathEnforcer.subtractTen(input)
            assert.equal(actual, expected)
        }),

            it('check if return correct result if input is 0', () => {
                let input = 0;
                let expected = -10;
                let actual = mathEnforcer.subtractTen(input)
                assert.equal(actual, expected)
            }),

            it('check if return correct result if input is floating number', () => {
                let input = 20.23;
                let expected = 10.23;
                let actual = mathEnforcer.subtractTen(input)
                assert.closeTo(actual, expected, 0.01)
            }),

            it('check if return correct result if input is positive but result is negative', () => {
                let input = 5;
                let expected = -5;
                let actual = mathEnforcer.subtractTen(input)
                assert.equal(actual, expected)
            }),

            it('check if return correct result if input is negative result is negative', () => {
                let input = -5;
                let expected = -15;
                let actual = mathEnforcer.subtractTen(input)
                assert.equal(actual, expected)
            }),

            it('check if return undefined result if input is word', () => {
                let input = "Sofia";
                let expected = undefined;
                let actual = mathEnforcer.subtractTen(input)
                assert.equal(actual, expected)
            }),

            it('check if return undefined result if input is special character', () => {
                let input = "$";
                let expected = undefined;
                let actual = mathEnforcer.subtractTen(input)
                assert.equal(actual, expected)
            })

    });

    describe('Test function sum', () => {

        it('check if returns correct result with positive inputed numbers', () => {
            let firstNum = 5;
            let secondNum = 15;
            let expected = 20;
            let actual = mathEnforcer.sum(firstNum, secondNum)
            assert.equal(actual, expected)
        }),

            it('check if returns correct result with negative inputed numbers', () => {
                let firstNum = -5;
                let secondNum = -15;
                let expected = -20;
                let actual = mathEnforcer.sum(firstNum, secondNum)
                assert.equal(actual, expected)
            }),

            it('check if returns correct result with floating point inputed numbers', () => {
                let firstNum = 5.5;
                let secondNum = 15.22;
                let expected = 20.72;
                let actual = mathEnforcer.sum(firstNum, secondNum)
                assert.closeTo(actual, expected, 0.01)
            }),

            it('check if returns undefined result with first parameter string and second number', () => {
                let firstNum = 'doctor';
                let secondNum = 15;
                let expected = undefined;
                let actual = mathEnforcer.sum(firstNum, secondNum)
                assert.equal(actual, expected)
            }),

            it('check if returns undefined result with first parameter number and second string', () => {
                let firstNum = 20;
                let secondNum = 'dog';
                let expected = undefined;
                let actual = mathEnforcer.sum(firstNum, secondNum)
                assert.equal(actual, expected)
            }),

            it('check if returns undefined result with first special char and second floating point number', () => {
                let firstNum = '*';
                let secondNum = 21.23;
                let expected = undefined;
                let actual = mathEnforcer.sum(firstNum, secondNum)
                assert.equal(actual, expected)
            }),

            it('check if returns undefined result with 2 arrays', () => {
                let firstNum = [1, 2, 3];
                let secondNum = [10, 20];
                let expected = undefined;
                let actual = mathEnforcer.sum(firstNum, secondNum)
                assert.equal(actual, expected)
            }),

            it('check if returns correct result with mixed positive and negative numbers', () => {
                // Arrange 
                let firstNum = -5;
                let secondNum = 15;
                let expected = 10;
                // Act
                let actual = mathEnforcer.sum(firstNum, secondNum)
                // Assert
                assert.equal(actual, expected)
            }),

            it('check if returns undefined if one parameter is missing', () => {
                // Arrange 
                let firstNum = 5;
                let expected = undefined;
                // Act
                let actual = mathEnforcer.sum(firstNum)
                // Assert
                assert.equal(actual, expected)
            })

    });
});
