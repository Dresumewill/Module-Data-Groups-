/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
// test.todo("given an empty array, returns -Infinity");
describe("findMax", () => {
    it("given an empty array, returns null", () => {
        expect(findMax([])).toBe(null);
    });
})

// Given an array with one number
// When passed to the max function
// Then it should return that number
it("given an array with one number, returns that number", () => {
    expect(findMax([5])).toBe(5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
it("given positive and negative numbers, returns the largest number", () => {
    expect(findMax([-10, 0, 25, -3, 7])).toBe(25);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
it("given only negative numbers, returns the closest to zero", () => {
    expect(findMax([-50, -10, -3, -20])).toBe(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
it("given decimal numbers, returns the largest decimal", () => {
    expect(findMax([1.5, 2.75, 2.74])).toBe(2.75);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
it("ignores non-numeric values and returns the max number", () => {
    expect(findMax(["hey", 10, "how", 50, 15])).toBe(50);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

it("given an empty array, returns null", () => {
    expect(findMax([])).toBe(null);
});
