'use strict';

class Node {

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  includes(value){
    let currentNode = this.head;
    let node = currentNode.value

    while (currentNode.next) {
      if(node === value){
        return true;
      }
      currentNode = currentNode.next;
      node = currentNode.value

    }
    return false;
  }
  toString(){
    let currentNode = this.head;
    let arr = [];
    while(currentNode.next){
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    arr.push('NULL')
    return arr.join(' -> ');
  }
  insertBefore(value, newVal){
    const newNode = new Node(newVal);

    if (this.head.value === value) {
      newNode.next = this.head
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    let previousNode;
    while(currentNode.next){
      if(currentNode.value === value){
        previousNode.next = newNode;
        newNode.next = currentNode
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next
    }
    return false;
  }
  insertAfter(value, newVal){
    let newNode = new Node(newVal);

    if (this.head.value === value) {
      newNode.next = this.head.next;
      this.head.next = newNode;
      return;
    }
    let currentNode = this.head;
    let nextNode;
    while(currentNode.next){
      nextNode = currentNode.next;
      if(currentNode.value === value){
        newNode = new Node(newVal, nextNode);
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
    return;
  }
}


module.exports = LinkedList;
