const LinkedList = require('./linked-list');

class ZipList extends LinkedList{

  constructor(){
    super()
  }

  zipper(list1,list2){
    let nodeList1 = list1.head;
    let nodeList2 = list2.head;
    while(nodeList2) {
      this.append(nodeList1.value)
      this.append(nodeList2.value)
      nodeList1 = nodeList1.next;
      nodeList2 = nodeList2.next;
    }
  }


}

module.exports = ZipList;
