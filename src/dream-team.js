const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrayNames) {
  let nickName = [];
  let firstCharacter = '';
  let tempString = '';
  if (!Array.isArray(arrayNames) || !(arrayNames.length > 0)) return false;
  for (let i = 0; i < arrayNames.length; i++) {
    tempString = arrayNames[i]
    if (typeof tempString === 'string') {
      while(tempString.startsWith(' ')) tempString = tempString.slice(1);
      firstCharacter = tempString.slice(0, 1);
      nickName.push(firstCharacter.toUpperCase());
    }
    nickName.sort();
  } 
  return nickName.join('');
}

module.exports = {
  createDreamTeam
};
