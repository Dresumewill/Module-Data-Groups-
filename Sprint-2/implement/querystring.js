function parseQueryString(queryString) {
  const result = {};

  if (!queryString) {
    return result;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const equalsIndex = pair.indexOf("=");

    if (equalsIndex === -1) {
      result[pair] = "";
      continue;
    } 

    const key = pair.slice(0, equalsIndex);
    const value = pair.slice(equalsIndex + 1);

    result[key] = value;
  }

  return result;
}

module.exports = parseQueryString;
