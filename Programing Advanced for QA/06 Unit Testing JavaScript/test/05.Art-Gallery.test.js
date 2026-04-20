import { artGallery } from "../05.Art-Gallery.js";
import { assert, expect } from "chai";

describe('Test function artGallery', () => {

    describe('Test function addArtwork', () => {

        it('1. Test if return Invalid Information! if inputed title !string', () => {
            expect(() => artGallery.addArtwork(123, '50 x 50', 'Monet'), "1.0 test").to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork({name: 321}, '50 x 50', 'Monet'), "1.1 test").to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork([], '50 x 50', 'Monet'), "1.2 test").to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork(null, '50 x 50', 'Monet'), "1.2 test").to.throw("Invalid Information!");
        }),

        it('2. Test if return Invalid Information! if inputed artist !string or it is not allawed', () => {
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', null), "2.0 test").to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', 123), "2.1 test").to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', { name: 321 }), "2.2 test").to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', []), "2.3 test").to.throw("Invalid Information!");
        }),

        it('3. Test if return Invalid Dimensions! if inputed dimensions does not match the required format', () => {
            expect(() => artGallery.addArtwork('Water fall', '50x 70', 'Monet'), "3.0 test").to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Water fall', '50 x70', 'Monet'), "3.1 test").to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Water fall', '-50 x 70', 'Monet'), "3.2 test").to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Water fall', '50 x -70', 'Monet'), "3.3 test").to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Water fall', '50.25 x 70', 'Monet'), "3.4 test").to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Water fall', '50 x 70.25', 'Monet'), "3.5 test").to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Water fall', '50.25 x 70.25', 'Monet'), "3.6 test").to.throw("Invalid Dimensions!");
        }),

        it('4. Test if return error massage if inputed artists does not match the allowed', () => {
            let errorMassage = "This artist is not allowed in the gallery!"
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', 'Dali'), "4.0 test").to.throw(errorMassage);
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', 'Vladimir Dimitrov Maistora'), "4.1 test").to.throw(errorMassage);
            expect(() => artGallery.addArtwork('Water fall', '50 x 70', 'Veselin Hanchev'), "4.1 test").to.throw(errorMassage);
        }),

        it('5. Test if return correct massage if inputed information is correct', () => {
            let expectedMassage = `Artwork added successfully: 'Water Lilies' by Monet with dimensions 50 x 70.`
            expect(artGallery.addArtwork('Water Lilies', '50 x 70', 'Monet')).to.equal(expectedMassage)
        })
        
    });

    describe('Test function calculateCosts', () => {
        it('1. Should return "Invalid Information!" with negative exhibitionCosts input', () => {
            expect(() => artGallery.calculateCosts(-123, 150, true), "1.0 test").to.throw("Invalid Information!");
        }),

        it('2. Should return "Invalid Information!" with negative insuranceCosts input', () => {
            expect(() => artGallery.calculateCosts(123, -150, true), "2.0 test").to.throw("Invalid Information!");
        }),

        it('3. Should return "Invalid Information!" with sponsor !boolean input', () => {
            expect(() => artGallery.calculateCosts(123, 150, 123), "3.0 test").to.throw("Invalid Information!");
        }),

        it('4. Should return correct result with sponsor true input', () => {
            let expected = "Exhibition and insurance costs are 270$, reduced by 10% with the help of a donation from your sponsor.";
            expect(artGallery.calculateCosts(150, 150, true)).to.equal(expected);
        }),

        it('5. Should return correct result with sponsor false input', () => {
            let expected = "Exhibition and insurance costs are 300$.";
            expect(artGallery.calculateCosts(150, 150, false)).to.equal(expected);
        });
    });

    describe('Test function organizeExhibits', () => {
        it('1. Should return "Invalid Information!" if artworksCount input is not a number or negative', () => {
            assert.throw(() => artGallery.organizeExhibits(-123, 120), "Invalid Information!")
            assert.throw(() => artGallery.organizeExhibits('Sto i Dvadeset', 120), "Invalid Information!")
            assert.throw(() => artGallery.organizeExhibits({price: "Sto"}, 120), "Invalid Information!")
            assert.throw(() => artGallery.organizeExhibits(null, 120), "Invalid Information!")
        }),

        it('2. Should return "Invalid Information!" if displaySpacesCount input is not a number or negative', () => {
            assert.throw(() => artGallery.organizeExhibits(123, -120), "Invalid Information!")
            assert.throw(() => artGallery.organizeExhibits(123, 'Hilqda'), "Invalid Information!")
            assert.throw(() => artGallery.organizeExhibits(123, null), "Invalid Information!")
            assert.throw(() => artGallery.organizeExhibits(123, { price: "Sto i Petdeset" }), "Invalid Information!")
        }),

        it('3. Should return correct result if artworks per space < 5', () => {
            // Arrange
            let artworksCount = 3;
            let displaySpacesCount = 2;
            let expected = "There are only 1 artworks in each display space, you can add more artworks.";
            // Act
            let actual = artGallery.organizeExhibits(artworksCount, displaySpacesCount);
            // Assert
            assert.equal(actual, expected);
        });

        it('4. Should return correct result if artworks per space >= 5', () => {
            // Arrange
            let artworksCount = 10;
            let displaySpacesCount = 2;
            let expected = "You have 2 display spaces with 5 artworks in each space.";
            // Act
            let actual = artGallery.organizeExhibits(artworksCount, displaySpacesCount);
            // Assert
            assert.equal(actual, expected);
        });

    });

});