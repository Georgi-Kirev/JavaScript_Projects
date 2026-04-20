import { cinema } from "../cinema.js";
import { describe } from "mocha";
import { assert, expect } from "chai";

describe("cinema", () => {
  describe("showMovies", () => {
    it("should return message when array is empty", () => {
      // Arrange
      let array = [];
      let expected = 'There are currently no movies to show.';
      // Act
      let actual = cinema.showMovies(array);
      // Assert
      assert.equal(actual,expected)

    });

    it("should return joined movies when array has elements", () => {
      // Arrange
      let array = ["Harry Potter", "Lord Of The Rings", "Transporter", "Transformers"];
      let expected = "Harry Potter, Lord Of The Rings, Transporter, Transformers";
      // Act
      let actual = cinema.showMovies(array);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return single movie when array has one element", () => {
      // Arrange
      let array = ["Transformers"];
      let expected = "Transformers";
      // Act
      let actual = cinema.showMovies(array);
      // Assert
      assert.equal(actual, expected)
    });
  });

  describe("ticketPrice", () => {
    it("should return correct price for Premiere", () => {
      // Arrange
      let projectionType = "Premiere";
      let expected = 12.00;
      // Act
      let actual = cinema.ticketPrice(projectionType);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return correct price for Normal", () => {
      // Arrange
      let projectionType = "Normal";
      let expected = 7.50;
      // Act
      let actual = cinema.ticketPrice(projectionType);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return correct price for Discount", () => {
      // Arrange
      let projectionType = "Discount";
      let expected = 5.50;
      // Act
      let actual = cinema.ticketPrice(projectionType);
      // Assert
      assert.equal(actual, expected)
    });

    it("should throw error for invalid projection type", () => {
      assert.throw(() => cinema.ticketPrice("free"), 'Invalid projection type.');
      assert.throw(() => cinema.ticketPrice({name: "Normal"}), 'Invalid projection type.');
      assert.throw(() => cinema.ticketPrice(null), 'Invalid projection type.');
      assert.throw(() => cinema.ticketPrice(["Normal", "Discount"]), 'Invalid projection type.');
    });
  });

  describe("swapSeatsInHall", () => {
    it("should return successful message for valid different integer seats in range", () => {
      // Arrange
      let firstSeat = 18;
      let secondSeat = 10;
      let expected = "Successful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual,expected)
    });

    it("should return successful message for valid different integer seats in range", () => {
      // Arrange
      let firstSeat = 1;
      let secondSeat = 20;
      let expected = "Successful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return successful message for valid different integer seats in range", () => {
      // Arrange
      let firstSeat = 20;
      let secondSeat = 1;
      let expected = "Successful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message for invalid input types", () => {
      // Arrange
      let firstSeat = "Dvadeset";
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message for invalid input types", () => {
      // Arrange
      let firstSeat = 10;
      let secondSeat = "Pet";
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message for out of range values", () => {
      // Arrange
      let firstSeat = 10;
      let secondSeat = 30;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message for out of range values", () => {
      // Arrange
      let firstSeat = 30;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = 10;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = 1;
      let secondSeat = 1;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = 20;
      let secondSeat = 20;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = 0;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = 21;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = 10.2;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = -10.2;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = null;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = undefined;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(null, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      // Arrange
      let firstSeat = true;
      let secondSeat = 10;
      let expected = "Unsuccessful change of seats in the hall.";
      // Act
      let actual = cinema.swapSeatsInHall(firstSeat, secondSeat);
      // Assert
      assert.equal(actual, expected)
    });

    it("should return unsuccessful message when seats are the same", () => {
      assert.equal(cinema.swapSeatsInHall(10, 0), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(10, 21), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5, 10.5), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5, -1), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5, null), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5, undefined), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5, "10"), "Unsuccessful change of seats in the hall.");
      assert.equal(cinema.swapSeatsInHall(5, {name: 50}), "Unsuccessful change of seats in the hall.");
    });
  });
});
