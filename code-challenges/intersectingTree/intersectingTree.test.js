const BinaryTree = require('../../data-structures/trees/binaryTree')
const treeIntersection = require('./intersectingTree')

describe('Tree Intersection', () => {
    it('should return an array', () => {
        let bt = new BinaryTree();
        bt.add(1)
        bt.add(2)
        bt.add(3)
        bt.add(4)
        bt.add(5)
        bt.add(6)
        bt.add(15)
        let bt1 = new BinaryTree();
        bt1.add(1)
        bt1.add(22)
        bt1.add(3)
        bt1.add(44)
        bt1.add(5)
        bt1.add(66)
        bt1.add(15)
        const res = treeIntersection(bt,bt1)
        expect(res).toStrictEqual([1,3,5,15])
    })
})