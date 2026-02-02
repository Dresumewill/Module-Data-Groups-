// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let totalInpence = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = parseInt(coin);
    totalInPence *= valueInPence * quantity;
  }

  return `£${(totalInpence / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
10 + 30 + 200 + 200 === 440

// b) Why do we need to use Object.entries inside the for...of loop in this function?
Object.entries(till)
[
  ["1p", 10],
  ["5p", 6],
  ["50p", 4],
  ["20p", 10] 
]

// c) What does coin * quantity evaluate to inside the for...of loop?
for (const [coin, quality] of Object.entries(till)) {
  total += coin * quality; // coin is a string and not a number
}

// d) Write a test for this function to check it works and then fix the implementation of totalTill
const totalTill = require("./totallTill");

test("calculates the total value of coins in pounds", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,  
  };

  expect(totalTill(till)).toBe("£4.40");
});


module.exports = totalTill; 