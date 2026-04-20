import {isOddOrEven} from '../01.Even-Or-Odd.js'
import {expect, assert} from 'chai'

describe ('Test function isOddOrEven', () => {

    it ('Check if it return undefined with inputed undefined', () => {
        // Arrange 
        let inputedString;
        let expected = undefined;
        // Act
        let actual = isOddOrEven(inputedString)
        // Assert
        assert.equal(actual, expected)
    }),

    it ('Check if it return even with inputed word with even length', () => {
        // Arrange 
        let inputedString = 'Banana'
        let expected = 'even';
        // Act
        let actual = isOddOrEven(inputedString)
        // Assert
        assert.equal(actual, expected)
    }),

    it ('Check if it return odd with inputed word with odd length', () => {
        // Arrange 
        let inputedString = 'Key'
        let expected = 'odd';
        // Act
        let actual = isOddOrEven(inputedString)
        // Assert
        assert.equal(actual, expected)
    })

});