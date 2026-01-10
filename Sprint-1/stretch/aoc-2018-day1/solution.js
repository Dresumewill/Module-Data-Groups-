const fs = require('fs');

// Read the input file and convert it into an array of numbers
const input = fs.readFileSync('input.txt', 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(Number);

/**
 * Part 1: Calculate the final sum
 */
const partOne = () => {
    const finalFrequency = input.reduce((acc, curr) => acc + curr, 0);
    console.log(`part One Result: ${finalFrequency}`);
};

/**
 * Part 2: Find the first frequency that is reached twice
 */
const partTwo = (numbers) => {
    let currentFrequency = 0;
    const seenFrequencies = new Set([0]);
    let found = false;

    // Loop indefinitely until we find the first repeated frequency
    while (!found) {
        for (const change of input) {
            currentFrequency += change;

            if (seenFrequencies.has(currentFrequency)) {
                console.log(`part Two Result (first duplicate): ${currentFrequency}`);
                found = true;
                break;
            }

            seenFrequencies.add(currentFrequency);
        }
    }
};

// Execute both parts
partOne();
partTwo();
