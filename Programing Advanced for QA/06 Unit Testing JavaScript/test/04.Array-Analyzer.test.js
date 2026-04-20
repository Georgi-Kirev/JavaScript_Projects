import { analyzeArray } from "../04.Array-Analyzer.js";
import { assert } from "chai";

describe ('Test function analyzeArray', () => {

    it ('should return correct result with input of array of numbers', () => {
        // Arrange 
        let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let expected = { min: 1, max: 10, length: 10 };

        // Act
        let actual = analyzeArray(input)
        // Assert
        assert.equal(actual.min,expected.min, "min in 1 test don't work!")
        assert.equal(actual.max,expected.max, "max in 1 test don't work!")
        assert.equal(actual.length,expected.length, "length in 1 test don't work!")

    }),

    it ('should return undefined result with input of array is empty', () => {
        // Arrange 
        let input = [];
        let expected = undefined;

        // Act
        let actual = analyzeArray(input)
        // Assert
        assert.equal(actual,expected, "2 test don't work!")

    }),

    it ('should return undefined result with input is a non-array input', () => {
        // Arrange 
        let input = {};
        let expected = undefined;

        // Act
        let actual = analyzeArray(input)
        // Assert
        assert.equal(actual,expected, "3 test don't work!")

    }),

    it ('should return correct result with input is a single element array', () => {
        // Arrange 
        let input = [1];
        let expected = { min: 1, max: 1, length: 1 };

        // Act
        let actual = analyzeArray(input)
        // Assert
        assert.equal(actual.min,expected.min, "min in 4 test don't work!")
        assert.equal(actual.max,expected.max, "max in 4 test don't work!")
        assert.equal(actual.length,expected.length, "length in 4 test don't work!")

    }),

    it ('should return correct result with input is an array with equal elements', () => {
        // Arrange 
        let input = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        let expected = { min: 1, max: 1, length: 9 };

        // Act
        let actual = analyzeArray(input)
        // Assert
        assert.equal(actual.min,expected.min, "min in 5 test don't work!")
        assert.equal(actual.max,expected.max, "max in 5 test don't work!")
        assert.equal(actual.length,expected.length, "length in 5 test don't work!")

    })

});