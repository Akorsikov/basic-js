const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let string = number.toString();
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < string.length; i++) {
    let curr = parseInt(string.slice(0, i) + string.slice(i + 1));
    if (curr > max) max = curr;
  }
  return max;
}

deleteDigit(342);
module.exports = {
  deleteDigit
};
