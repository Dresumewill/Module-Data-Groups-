function findMax(elements) {
    if (!Array.isArray(elements)) return null;

    const numbers = elements.filter((value) => typeof value === "number" && !isNaN(value));
    
    if (numbers.length === 0) return null;

    return Math.max(...numbers);
}

module.exports = findMax;
