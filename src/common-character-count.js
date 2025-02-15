const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let count = 0;
  while (arr1.length > 0) {
    let char = arr1.pop();
    let index = arr2.indexOf(char);
    if (index !== -1) {
      arr2.splice(index, 1);
      count++;
    }

  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
