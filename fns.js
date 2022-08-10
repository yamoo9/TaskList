function deepen(obj) {
  const result = {};

  for (const objectPath in obj) {
    const parts = objectPath.split('.');
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

function createArray({ dictionary /* platform */ }) {
  const array = dictionary.allTokens;
  return JSON.stringify(array);
}

function filterTokensByType(type, tokens) {  
  const obj = tokens.reduce((acc, cur) => {
    if (cur.type === type) {
      acc[cur.path.join('.')] = `var(--${cur.name}, ${cur.value})`;
    }
    return acc;
  }, {});
  return deepen(obj);
}

module.exports = { createArray, filterTokensByType };
