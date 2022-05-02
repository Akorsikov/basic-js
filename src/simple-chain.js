const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value !== undefined ? `( ${value} )` : '( )');
    return this;
  },
  removeLink(position) {    
    if (!(typeof position === 'number' && Math.round(position) === position)) {
      throw new Error ("You can\'t remove incorrect link!");
    }

    if (position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error ("You can\'t remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainOut = this.chain.join('~~');
    this.chain = [];
    return chainOut;
  }
};

module.exports = {
  chainMaker
};
