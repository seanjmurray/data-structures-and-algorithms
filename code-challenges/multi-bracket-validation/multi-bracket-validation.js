'use strict';

const multiBracketValidation = (str) => {
  let stack = []; 
  let string = str.match(/[()[\]{}]/g).join('');
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[' ) {
      stack.push(string[i]);
    } else {
      let last = stack.pop();
      if (string[i] !== map[last]) {return false};
    }
  }
  if (stack.length !== 0) {return false};
  return true;
}

module.exports = multiBracketValidation;
