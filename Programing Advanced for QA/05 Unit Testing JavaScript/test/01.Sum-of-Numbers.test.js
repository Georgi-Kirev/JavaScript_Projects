import {sum} from '../01.Sum-of-Numbers.js'
import { expect, assert } from 'chai';


describe ('Test function sum from Sum-of-Numbers.js', () => {

	it ('Should return correct sum of array with numbers is passed', () => {
		// Arrange
        let array = [1, 2, 3, 4];
        let expected = 10;
		// Act
        let result = sum(array);

		// Assert
        expect(result).to.equal(expected);

	}),

	it ('should return same number if array have one element', () => {
        // Arrange
        let array = [4];
        let expected = 4;
        // Act
        let result = sum(array)
        // Assert
        assert.equal(result, expected);
    }),

	it ('should return 0 if array is empty', () => {
        // Arrange
        let array = [];
        let expected = 0;
        // Act 
        let resutl = sum(array)
        // Assert
        expect(resutl).to.equal(expected)
    })

});