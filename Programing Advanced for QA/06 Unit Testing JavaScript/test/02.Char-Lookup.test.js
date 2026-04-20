import {lookupChar} from '../02.Char-Lookup.js'
import {expect, assert} from 'chai'

describe('Test function lookupChar', () => {

    it('Check if it return undefined if inputed index is a string', () => {
        // Arrange 
        let inputedString = "word";
        let inputedIndex = 'Building';
        let expected = undefined;
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return undefined if inputed string is a number', () => {
        // Arrange 
        let inputedString = 123;
        let inputedIndex = 1;
        let expected = undefined;
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return undefined if inputed index is a floating point number', () => {
        // Arrange 
        let inputedString = '123';
        let inputedIndex = 1.23;
        let expected = undefined;
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return "Incorrect index" if index is a negative number', () => {
        // Arrange 
        let inputedString = 'Truck';
        let inputedIndex = -10;
        let expected = "Incorrect index";
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return "Incorrect index" if index is out of bounds', () => {
        // Arrange 
        let inputedString = 'Truck';
        let inputedIndex = 20;
        let expected = "Incorrect index";
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return "Incorrect index" if index is equal to string length', () => {
        // Arrange 
        let inputedString = 'Truck';
        let inputedIndex = 5;
        let expected = "Incorrect index";
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return correct character if input is correct', () => {
        // Arrange 
        let inputedString = 'Truck';
        let inputedIndex = 2;
        let expected = "u";
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    }),

    it('Check if it return space character if index points to a space', () => {
        // Arrange 
        let inputedString = 'Truck Car';
        let inputedIndex = 5;
        let expected = " ";
        // Act
        let actual = lookupChar(inputedString, inputedIndex)
        // Assert
        assert.equal(actual, expected);
    })

});
