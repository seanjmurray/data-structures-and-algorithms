'use strict';
function fizzBuzzTree (tree) {

  function _preOrder(root) {

    if(!root) { return; }

    if(root.value %15 === 0) { 

      root.value = 'fizzbuzz' ;
      console.log(root)

      _preOrder(root.left);

      _preOrder(root.right);

      return;

    }else if (root.value % 3 === 0) {

      root.value = 'fizz';
      console.log(root)
      _preOrder(root.left);

      _preOrder(root.right);

      return;

    } else if(root.value % 5 === 0) {

      root.value = 'buzz';
      console.log(root)

      _preOrder(root.left);

      _preOrder(root.right);

      return;

    } else {
      root.value = `${root.value}`;
      return;
    }


    

  }

  _preOrder(tree.root)

  return tree;

}

module.exports = fizzBuzzTree;

