'use strict';
function fizzBuzzTree (tree) {

  function _preOrder(root) {

    if(!root) { return; }

    if(root %15 === 0) { 

      root.value = 'fizzbuzz' ;

      _preOrder(root.left);

      _preOrder(root.right);

      return;

    }else if (root % 3 === 0) {

      root.value = 'fizz';

      _preOrder(root.left);

      _preOrder(root.right);

      return;

    } else if(root % 5 === 0) {

      root.value = 'buzz';

      _preOrder(root.left);

      _preOrder(root.right);

      return;

    }

    root.value = `${root.value}`;

    return;

  }

  _preOrder(tree.root)

  return tree;

}

module.exports = fizzBuzzTree;

