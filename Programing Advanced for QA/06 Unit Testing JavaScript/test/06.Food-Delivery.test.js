import { foodDelivery } from "../06.Food-Delivery.js";
import { expect, assert } from "chai";

describe ('Tests from Food-Delivery', () => {
    
    describe('Tests for getCategory function', () => {
        it('1. Test if return correct result if input is "Vegan".', () => {
            // Arrange
            let input = "Vegan";
            let expectedText = "Dishes that contain no animal products.";
            // Act
            let actual = foodDelivery.getCategory(input)
            // Assert
            assert.equal(actual, expectedText, '1. Test fails')
        }),

        it('2. Test if return correct result if input is "Vegetarian".', () => {
            // Arrange
            let input = "Vegetarian";
            let expectedText = "Dishes that contain no meat or fish.";
            // Act
            let actual = foodDelivery.getCategory(input)
            // Assert
            assert.equal(actual, expectedText, '2. Test fails')
        }),

        it('3. Test if return correct result if input is "Gluten-Free".', () => {
            // Arrange
            let input = "Gluten-Free";
            let expectedText = "Dishes that contain no gluten.";
            // Act
            let actual = foodDelivery.getCategory(input)
            // Assert
            assert.equal(actual, expectedText, '3. Test fails')
        }),

        it('4. Test if return correct result if input is "All".', () => {
            // Arrange
            let input = "All";
            let expectedText = "All available dishes.";
            // Act
            let actual = foodDelivery.getCategory(input)
            // Assert
            assert.equal(actual, expectedText, '4. Test fails')
        }),

        it('5. Test if return correct result if input is "Drob Sarma".', () => {
            assert.throw(() => foodDelivery.getCategory('Drob Sarma'), "Invalid Category!", '5.0 Test fails')
            assert.throw(() => foodDelivery.getCategory(543), "Invalid Category!", '5.1 Test fails')
            assert.throw(() => foodDelivery.getCategory([1,2,3,4]), "Invalid Category!", '5.2 Test fails')
            assert.throw(() => foodDelivery.getCategory({name: 47}), "Invalid Category!", '5.3 Test fails')
        })
    });

    describe('Tests from addMenuItem', () => {
        it('1. Should return "Invalid Information!" massage if inputed menuItem is !Number', () => {
            assert.throw(() => foodDelivery.addMenuItem('Tomato', 2.3), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem(-123, 2.3), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem([], 2.3), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem({model: "007"}, 2.3), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem(null, 2.3), "Invalid Information!")
        }),

        it('2. Should return "Invalid Information!" massage if inputed maxPrice is !Number', () => {
            assert.throw(() => foodDelivery.addMenuItem({ name: "Coffee"}, 'Tomato'), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem({ name: "Coffee" }, -2.3), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem({ name: "Coffee" }, []), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem({ name: "Coffee" }, {}), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem({ name: "Coffee" }, null), "Invalid Information!")
        }),

        it('3. Should return "Invalid Information!" massage if input is !Number', () => {
            assert.throw(() => foodDelivery.addMenuItem('5', 'Tomato'), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem({}, -2.3), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem([], []), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem(null, {}), "Invalid Information!")
            assert.throw(() => foodDelivery.addMenuItem('Tomato', null), "Invalid Information!")
        }),

        it("4. Should return the correct count of items within the min price and menu limit", () => {
            // Arrange
            let inputMenu = [{ name: "Coffee", price: 5 }];
            let inputMaxPrice = 5;
            let expectedResult = "There are 1 available menu items matching your criteria!";
            // Act
            let actualResult = foodDelivery.addMenuItem(inputMenu, inputMaxPrice);
            // Assert
            assert.equal(actualResult, expectedResult);
        }),

        it("5. Should return the correct count of items within the higher price limit", () => {
            // Arrange
            let inputMenu = [{ name: "Coffee", price: 10 }];
            let inputMaxPrice = 5;
            let expectedResult = "There are 0 available menu items matching your criteria!";
            // Act
            let actualResult = foodDelivery.addMenuItem(inputMenu, inputMaxPrice);
            // Assert
            assert.equal(actualResult, expectedResult);
        }),

        it("6. Should return the correct count of items within the price limit", () => {
            // Arrange
            let inputMenu = [{ name: "Coffee", price: 5 },{ name: "Cake", price: 15 },{ name: "Steak", price: 25 }];
            let inputMaxPrice = 15;
            let expectedResult = "There are 2 available menu items matching your criteria!";
            // Act
            let actualResult = foodDelivery.addMenuItem(inputMenu, inputMaxPrice);
            // Assert
            assert.equal(actualResult, expectedResult);
        });
    });

    describe('Tests for calculateOrderCost', () => {
        it('1. Should return "Invalid Information!" if input is incorrect.', () => {
            assert.throw(() => foodDelivery.calculateOrderCost(232, 'sauce', false), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost(-232, 'sauce', false), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost(null, 'sauce', false), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost('standard', 232, false), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost('standard', -232, false), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost('standard', null, false), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost('standard', 'sauce', null), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost('standard', 'sauce', []), "Invalid Information!")
            assert.throw(() => foodDelivery.calculateOrderCost('standard', 'sauce', -232), "Invalid Information!")
        }),

        it ('2. Should return correct result with standart shipping input and discount true', () => {
            // Arrange
            let shipping = ['standard'];
            let addons = ['sauce'];
            let discount = true;
            let expected = "You spend $3.40 for shipping and addons with a 15% discount!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('3. Should return correct result with standart shipping input and discount false', () => {
            // Arrange
            let shipping = ['standard'];
            let addons = ['sauce'];
            let discount = false;
            let expected = "You spend $4.00 for shipping and addons!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('4. Should return correct result with express shipping input and discount true', () => {
            // Arrange
            let shipping = ['express'];
            let addons = ['sauce'];
            let discount = true;
            let expected = "You spend $5.10 for shipping and addons with a 15% discount!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('5. Should return correct result with express shipping input and discount false', () => {
            // Arrange
            let shipping = ['express'];
            let addons = ['sauce'];
            let discount = false;
            let expected = "You spend $6.00 for shipping and addons!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('6. Should return correct result with express shipping input, beverage and discount true', () => {
            // Arrange
            let shipping = ['express'];
            let addons = ['beverage'];
            let discount = true;
            let expected = "You spend $7.22 for shipping and addons with a 15% discount!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('7. Should return correct result with express shipping input, beverage and discount false', () => {
            // Arrange
            let shipping = ['express'];
            let addons = ['beverage'];
            let discount = false;
            let expected = "You spend $8.50 for shipping and addons!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('8. Should return correct result with standard shipping input, beverage and discount false', () => {
            // Arrange
            let shipping = ['standard'];
            let addons = ['beverage'];
            let discount = false;
            let expected = "You spend $6.50 for shipping and addons!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        }),

        it ('9. Should return correct result with standard shipping input, beverage and discount true', () => {
            // Arrange
            let shipping = ['standard'];
            let addons = ['beverage'];
            let discount = true;
            let expected = "You spend $5.52 for shipping and addons with a 15% discount!"
            // Act
            let actual = foodDelivery.calculateOrderCost(shipping,addons,discount);
            // Assert
            assert.equal(actual, expected)
        })
    });
});