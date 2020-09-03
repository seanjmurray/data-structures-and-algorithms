'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
    this.queue = []
  }
  enqueue(val){
    this.queue.push(val)
    this.front = this.queue[0]
    this.rear = val
  }
  dequeue(){
    return this.queue.shift()
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  preOrder() {
    let collection = [];

    function walk(root) {

      if (!root) {
        return;
      }

      collection.push(root.value);
      walk(root.left);
      walk(root.right);
    }


    walk(this.root);

    return collection;

  }


  inOrder() {
    let collection = [];

    function walk(root) {

      if (!root) {
        return;
      }

      walk(root.left);
      collection.push(root.value);
      walk(root.right);

    }

    walk(this.root);

    return collection;
  }


  postOrder() {
    let collection = [];

    function walk(root) {

      if (!root) {
        return;
      }

      walk(root.left);
      walk(root.right);
      collection.push(root.value);

    }

    walk(this.root);

    return collection;
  }

  findMax(){
    let max = 0;
    let arr = this.preOrder(this.root)
    arr.forEach(val => {
      if(val > max){ max = val}
    })
    return max;
  }
  breadthFirst(tree) {
    let que = new Queue()
    let arr = []
    que.enqueue(tree.root)
    while(que.queue.length){
      let front = que.dequeue()
      arr.push(front.value)
      if(front.left){
        que.enqueue(front.left)
      }
      if(front.right){
        que.enqueue(front.right)
      }
    }
    return arr;
  }
}


class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }


  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }


    function walk(root, newNode) {


      if (newNode.value < root.value) {

        if (!root.left) {
          root.left = newNode;
        } else {
          walk(root.left, newNode);
        }

      } else {

        if (!root.right) {
          root.right = newNode;
        } else {
          walk(root.right, newNode);
        }

      }
    }

    walk(this.root, node);


  }


  contains(value) {

    if (this.preOrder().includes(value)) {
      return true;
    } else {
      return false;
    }

  }

}

module.exports = BinarySearchTree;
