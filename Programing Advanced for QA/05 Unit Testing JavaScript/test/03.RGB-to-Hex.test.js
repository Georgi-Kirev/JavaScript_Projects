
import {rgbToHexColor} from '../03.RGB-to-Hex.js'
import { assert, expect } from 'chai'

describe ('Test function rgbToHexColor', () => {

    it ('should return invalid/undefined type with one inputed number', () => {
        // Arrange & Act
        let array = rgbToHexColor(0);
        let expected = undefined;
        // Assert
        assert.equal(array, expected)
    }),

    it('should return undefined for invalid data types', () => {
        assert.equal(rgbToHexColor("5", 0, 0), undefined);
        assert.equal(rgbToHexColor(1.23, 0, 0), undefined);
        assert.equal(rgbToHexColor(0, 0, {}), undefined);
    });

    it ('should return invalid/undefined type with negative inputed number', () => {
        // Arrange & Act
        let array = rgbToHexColor(-1, -20, -35)
        let expected = undefined;
        // Assert
        assert.equal(array, expected)

    }),

    it ('should return invalid/undefined type with number > 255', () => {
        // Arrange & Act
        let array = rgbToHexColor(500, 20, 35)
        let expected = undefined;
        // Assert
        assert.equal(array, expected)


    }),

    it ('should return #0000FF as a result', () => {
        // Arrange & Act
        let array = rgbToHexColor(0, 0, 255)
        let expected = "#0000FF";
        // Assert
        assert.equal(array, expected)
    }),

    it ('should return ##00FF00 as a result', () => {
       // Arrange & Act
        let array = rgbToHexColor(0, 255, 0)
        let expected = "#00FF00";
        // Assert
        assert.equal(array, expected)

    }),

    it ('should return #FF0000 as a result', () => {
       // Arrange & Act
        let array = rgbToHexColor(255, 0, 0)
        let expected = "#FF0000";
        // Assert
        assert.strictEqual(array, expected)

    }),
    
    it('should return correct hex color for boundary values (0)', () => {
    // Тест за долната граница (0, 0, 0) -> Черен цвят
        let array = rgbToHexColor(0, 0, 0);
        let expected = "#000000";
        assert.strictEqual(array, expected);
    }),

    it('should return correct hex color for boundary values (255)', () => {
    // Тест за горната граница (255, 255, 255) -> Бял цвят
        let array = rgbToHexColor(255, 255, 255);
        let expected = "#FFFFFF";
        assert.strictEqual(array, expected);
    });
});