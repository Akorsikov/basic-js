const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(backyard) {
  const ears = '^^';
  let cats = 0;
  for (let i = 0; i < backyard.length; i++) {
    cats += backyard[i].reduce((sum, current) => { if (current === ears) {sum++} return sum}, 0);
  }
  return cats;
}

module.exports = {
  countCats
};
