// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Must be an array with at least one number
    if (!Array.isArray(list)) return null;

    // Filter only valid numbers
    const numbers = list.filter((value) => typeof value === "number" && !isNaN(value));

    // No numeric values - null
    if (numbers.length === 0) return null;

    // Sort without mutating original input
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    // Odd length
    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    }

    // Even length
    return (sorted[mid - 1] + sorted[mid]) / 2;
}

module.exports = calculateMedian;
