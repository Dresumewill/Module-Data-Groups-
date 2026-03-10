const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

describe("tally", () => {
// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
it("counts unique items correctly", () => {
    expect(tally(["a", "b", "a", "c", "b", "a", "c"])).toEqual({
        a: 3,
        b: 2,
        c: 2,
    });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
// test.todo("tally on an empty array returns an empty object");
it("returns and empty object for an empty array", () => {
        expect(tally([])).toEqual({});
    });
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
it("counts duplicate items correctly", () => {
    expect(tally(["b", "b", "b" ])).toEqual({ b: 3 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
it("throws an error for invalid input", () => {
    expect(() => tally("invalid")).toThrow("Input must be an array");
});
