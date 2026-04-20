import { findNewApartment } from '../findNewApartment.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('test_findNewApartment', () =>{
    describe('isGoodLocation', () => {
        it('should throw error on invalid input', () => {
            assert.Throw(() => findNewApartment.isGoodLocation(123, false), "Invalid input!");
            assert.Throw(() => findNewApartment.isGoodLocation(null, false), "Invalid input!");
            assert.Throw(() => findNewApartment.isGoodLocation("Sofia", 220), "Invalid input!");
            assert.Throw(() => findNewApartment.isGoodLocation("Sofia", "ne e"), "Invalid input!");
        });
        it('should return "This location is not suitable for you." if location is not valid', () => {
            // Arrange
            let city = "Vidin";
            let location = false;
            let expected = "This location is not suitable for you.";
            // Act
            let actual = findNewApartment.isGoodLocation(city,location)
            // Assert
            assert.equal(actual,expected, "Wrong city!")
        });
        it('should return "You can go on home tour!" if location is good and public transport is available', () => {
            // Arrange
            let city = "Varna";
            let location = true;
            let expected = "You can go on home tour!";
            // Act
            let actual = findNewApartment.isGoodLocation(city, location)
            // Assert
            assert.equal(actual, expected, "Good city!")
        });
        it('should return "There is no public transport in area." if location is good but public transport is unavailable', () => {
            // Arrange
            let city = "Varna";
            let location = false;
            let expected = "There is no public transport in area.";
            // Act
            let actual = findNewApartment.isGoodLocation(city, location)
            // Assert
            assert.equal(actual, expected, "Good city with no easy transport!")
        });
    }),
    describe('Test isLargeEnough', () => {
        it('Should return apartments that meet the wanted criteria for minimal square meters', () => {
            // Arrange
            let apartment = [60,45,50];
            let minimalSquareMeters = 40;
            let expected = '60, 45, 50';
            // Act
            let actual = findNewApartment.isLargeEnough(apartment,minimalSquareMeters)
            // Assert
            assert.equal(actual,expected);
        });

        it('Should throw error on onvalid input', () => {
            assert.Throw(() => findNewApartment.isLargeEnough("banan", "kartofi", "luk", 40), "Invalid input!");
            assert.Throw(() => findNewApartment.isLargeEnough(null, 40), "Invalid input!");
            assert.Throw(() => findNewApartment.isLargeEnough({name: "gogo"}, 40), "Invalid input!");
            assert.Throw(() => findNewApartment.isLargeEnough([12, 15, 30], "Mnogo golqm"), "Invalid input!");
        });
    }),
    describe('isItAffordable', () => {
        it('should throw an error on invalid input', () => {
            assert.Throw(() => findNewApartment.isItAffordable("banan", 40), "Invalid input!");
            assert.Throw(() => findNewApartment.isItAffordable([12,20,60], 40), "Invalid input!");
            assert.Throw(() => findNewApartment.isItAffordable(20, "domat"), "Invalid input!");
            assert.Throw(() => findNewApartment.isItAffordable(20, [20, 30, 60]), "Invalid input!");
        });
        it('should not be affordable if price is greater than budget', () => {
            // Arrange
            let price = 1600;
            let budget = 1000;
            let expected = "You don't have enough money for this house!";
            // Act
            let actual = findNewApartment.isItAffordable(price, budget)
            // Assert
            assert.equal(actual, expected);
        });
        it('should be affordable if price is equal to or less than budget', () => {
            // Arrange
            let price = 600;
            let budget = 1000;
            let expected = "You can afford this home!";
            // Act
            let actual = findNewApartment.isItAffordable(price, budget)
            // Assert
            assert.equal(actual, expected);
        });
    })
})


