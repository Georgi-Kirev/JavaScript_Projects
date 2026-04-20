    import { chooseYourCar } from '../chooseYourCar.js'
    import { describe } from 'mocha'
    import { expect, assert } from 'chai';

    describe('Test chooseYourCar', () => {
        describe('choosingType', () => {
            it('should throw an error on invalid input', () => {
                assert.throw(() => chooseYourCar.choosingType("Plane", "Green", 2010), "This type of car is not what you are looking for.");
                assert.throw(() => chooseYourCar.choosingType("Sedan", "Black", 1899),`Invalid Year!`);
                assert.throw(() => chooseYourCar.choosingType("Sedan", "Green", 2023),`Invalid Year!`);
            });
            it('should meet requirments for a car', () => {
                // Arrange
                let type = "Sedan";
                let color = "Red";
                let year = 2010;

                let expected = `This ${color} ${type} meets the requirements, that you have.`
                // Act
                let actual = chooseYourCar.choosingType(type, color, year);
                // Assert
                assert.equal(actual, expected)
            });
            it('should not meet requirments for a car', () => {
                // Arrange
                let type = "Sedan";
                let color = "Red";
                let year = 1900;

                let expected = `This ${type} is too old for you, especially with that ${color} color.`
                // Act
                let actual = chooseYourCar.choosingType(type, color, year);
                // Assert
                assert.equal(actual, expected)
            });
        });

        describe('brandName', () => {
            it('should throw an error on invalid input', () => {
                assert.throw(() => chooseYourCar.brandName(["A", "B"], 2), "Invalid Information!");
                assert.throw(() => chooseYourCar.brandName("Opel", 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName({name: "VW"}, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(null, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(5, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW"], 5.2),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW", "Mercedes", "Opel"], -5.2),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW", "Mercedes", "Opel"], null),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW", "Mercedes", "Opel"], "Two"),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW", "Mercedes", "Opel"], 3),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW", "Mercedes", "Opel"], 40),"Invalid Information!");
                assert.throw(() => chooseYourCar.brandName(["VW", "Mercedes", "Opel"], -1),"Invalid Information!");
            });

            it('should return the correct brands', () => {
                // Arrange
                let type = ["Opel", "VW", "Mercedes", "Reno", "BMW", "Toyota"];
                let brandIndex = 1;

                let expected = "Opel, Mercedes, Reno, BMW, Toyota";
                // Act
                let actual = chooseYourCar.brandName(type,brandIndex);
                // Assert
                assert.equal(actual, expected)
            });
        });

        describe('carFuelConsumption', () => {
            it('should throw an error on invalid input', () => {
                assert.throw(() => chooseYourCar.carFuelConsumption("Plane", 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(null, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(-50, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(-1, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(0, 5),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(50 , "Pet"),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(50 , -5),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(50 , 0),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(50 , -1),"Invalid Information!");
                assert.throw(() => chooseYourCar.carFuelConsumption(50 , null),"Invalid Information!");
            });

            it('should return message for an efficient car', () => {
                // Arrange
                let distanceInKilometers = 1000;
                let consumptedFuelInLiters = 70;

                let expected = `The car is efficient enough, it burns 7.00 liters/100 km.`;
                // Act
                let actual = chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters);
                // Assert
                assert.equal(actual, expected)
            });
            // Този е добавен допълнително за да тества стойности под 7 на 100 км
            it('should return message for an efficient car', () => {
                // Arrange
                let distanceInKilometers = 350;
                let consumptedFuelInLiters = 20;

                let expected = `The car is efficient enough, it burns 5.71 liters/100 km.`;
                // Act
                let actual = chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters);
                // Assert
                assert.equal(actual, expected)
            });

            it('should return message for an non efficient car', () => {
                // Arrange
                let distanceInKilometers = 245;
                let consumptedFuelInLiters = 20;

                let expected = `The car burns too much fuel - 8.16 liters!`;
                // Act
                let actual = chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters);
                // Assert
                assert.equal(actual, expected)
            });
        });
    });