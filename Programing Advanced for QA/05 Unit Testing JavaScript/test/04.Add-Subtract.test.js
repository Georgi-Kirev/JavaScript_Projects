
import { createCalculator } from "../04.Add-Subtract.js";
import { assert } from "chai";

describe('createCalculator', () => {
    let calc;

    // Преди всеки тест създаваме нов калкулатор, за да започваме от 0
    beforeEach(() => {
        calc = createCalculator();
    });

    it('should return 0 initially', () => {
        assert.equal(calc.get(), 0);
    });

    it('should add numbers correctly', () => {
        calc.add(2);
        calc.add(3);
        assert.equal(calc.get(), 5);
    });

    it('should subtract numbers correctly', () => {
        calc.add(10);
        calc.subtract(7);
        assert.equal(calc.get(), 3);
    });

    it('should work with numbers as strings', () => {
        calc.add('10');
        calc.subtract('2');
        assert.equal(calc.get(), 8);
    });

    it('should handle negative numbers and decimals', () => {
        calc.add(-5);
        calc.subtract(1.5);
        assert.equal(calc.get(), -6.5);
    });

    it('should return NaN if we add a non-number string', () => {
        calc.add('hello');
        assert.isNaN(calc.get());
    }),

    it ('should return correct number when one of inputs are string', () => {
        calc.add('10')
        calc.subtract(3)
        assert.equal(calc.get(), 7)
    });
});
