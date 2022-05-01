const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let outStr = '';
 
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    while (str[i] === str[i+1]) {
      count++;
      i++
    }
    outStr += (count > 0) ? `${count + 1}` + str[i] : str[i];
  }
  return outStr;
}

//encodeLine('aabbbc');
module.exports = {
  encodeLine
};
