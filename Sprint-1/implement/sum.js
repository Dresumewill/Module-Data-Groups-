function sum(elements) {
    if (!Array.isArray(elements)) return 0;

    return elements.reduce((total, value) => {
        if (typeof value === "number" && !isNaN(value)) {
            return total + value;
        }
        return total;
    }, 0);
}

module.exports = sum;
