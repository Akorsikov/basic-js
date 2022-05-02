const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error ("\'arr\' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];
  let arrOut = [];
  let itemArrOut;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-prev' : {
        if (i > 0) {
          itemArrOut = arr[i-1];
          if (typeof itemArrOut === 'number') arrOut.push(itemArrOut);
        }
      } break;
      case '--double-next' : {
        if (i < arr.length - 1) {
          itemArrOut = arr[i+1];
          arrOut.push(itemArrOut);
          arrOut.push(itemArrOut);
          //i++;
        }
      } break;
      case '--discard-prev' : {
        itemArrOut = arrOut[arrOut.length-1];
        if (typeof itemArrOut === 'number') arrOut.pop();
      } break;
      case '--discard-next' : {
        i++;
      } break;
      default : {
        arrOut.push(arr[i]);
      }
    }
  }
  return arrOut;
}
transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
module.exports = {
  transform
};

  //input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
  //output: [1, 2, 3, 4, 5]


  //input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
  //output: [1, 2, 3, 1337, 1337, 1337, 4, 5]--------------!!!

  //input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
  //output: [1, 2, 3, 4, 5]

  //input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
  //output: [1, 2, 3, 1337, 4, 5]