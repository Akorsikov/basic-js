const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
/*matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
];*/


function minesweeper(matrix) {
  let matrixOut = matrix.map(row => row.map(() => 0) );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j]) {
        if (i-1 >= 0) {
          if (j-1 >= 0) matrixOut[i-1][j-1]++;
          matrixOut[i-1][j]++;
          if (j+1 <= matrix[i].length - 1) matrixOut[i-1][j+1]++;
        }
        if (j-1 >= 0) matrixOut[i][j-1]++;        
        if (j+1 <= matrix[i].length-1) matrixOut[i][j+1]++;        
        if (i+1 <= matrix.length-1) {
          if (j-1 >= 0) matrixOut[i+1][j-1]++;
          matrixOut[i+1][j]++;
          if (j+1 <= matrix[i].length - 1) matrixOut[i+1][j+1]++;
        }
      }
    }
  }
  return matrixOut;
}

//minesweeper(matrix);
module.exports = {
  minesweeper
};
