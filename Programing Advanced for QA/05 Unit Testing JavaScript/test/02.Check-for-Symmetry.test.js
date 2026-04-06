
import { isSymmetric } from '../02.Check-for-Symmetry.js';
import { expect, assert } from 'chai';

describe('Test function isSymmetric', () => {

    it('should return false if input is not array', () => {

        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric(5.42)).to.be.false;
        expect(isSymmetric({name: "-10"})).to.be.false;
        expect(isSymmetric("Hi")).to.be.false;
        expect(isSymmetric(1, 3, 4)).to.be.false;

    }),

    it('should return true if input is symetric array', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        expect(isSymmetric(['Georgi', 'Ivan', 'Georgi'])).to.be.true;
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.true;
        expect(isSymmetric(['G', 'I', 'I', 'G'])).to.be.true;
        expect(isSymmetric(['Georgi', 1, 1, 'Georgi'])).to.be.true;
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;

    }),

    it('should return false if input is not symetric array', () => {
        expect(isSymmetric(1, 2, 3)).to.be.false;
        expect(isSymmetric('Georgi', 'Ivan', 'Petko')).to.be.false;
        expect(isSymmetric('3', '2', '1')).to.be.false;
        expect(isSymmetric('S', 'I', 'G')).to.be.false;
        expect(isSymmetric('Dido', 1, 2, 'Georgi')).to.be.false;
        expect(isSymmetric(1, 3, 2, 6)).to.be.false;

    }),

    it('should return false for non-array input (number)', () => {
        expect(isSymmetric(123)).to.be.false;
    }),

    it('should return false for non-array input (string)', () => {
        expect(isSymmetric("hello")).to.be.false;
    }),

    it('should return false for symmetric-like but different types', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

});

// Второ решение:


describe('isSymmetric tests', () => {
    // Тестове за валидни (симетрични) масиви
    it('should return true for symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return true for symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('should return true for symmetric mixed array', () => {
        expect(isSymmetric([1, 'hi', 1])).to.be.true;
    });

    it('should return true for empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });

    // Тестове за невалидни (несиметрични) масиви
    it('should return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false for symmetric-like but different types', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

    // Тестове за грешни входни типове
    it('should return false for non-array input (number)', () => {
        expect(isSymmetric(123)).to.be.false;
    });

    it('should return false for non-array input (string)', () => {
        expect(isSymmetric("hello")).to.be.false;
    });
});
