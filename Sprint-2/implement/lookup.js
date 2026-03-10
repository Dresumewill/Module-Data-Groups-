function createLookup(countryCurrencyPairs) {
  // implementation here
if (!Array.isArray(countryCurrencyPairs)) {
  throw new Error("Input must be an array");
}

const lookup = {};

countryCurrencyPairs.forEach(pair => {
  const [countryCode, currencyCode] = pair;
  lookup[countryCode] = currencyCode;
});

return lookup;

}

module.exports = createLookup;
