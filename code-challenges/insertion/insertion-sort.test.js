const insertionSort = require('./insertion-sort')


describe('Testing insertion sort', () => {

    it('should sort an array', () => {
        const arr = [20,18,12,8,5,-2]
        const res = insertionSort(arr)
        expect(res).toStrictEqual([-2,5,8,12,18,20])
    })

    it('Should sort with few uniques', () => {
        const arr = [5,12,7,5,5,7]
        const res = insertionSort(arr)
        expect(res).toStrictEqual([5,5,5,7,7,12])
    })

    it('should sort any array', () => {
        const arr = [2,3,5,7,13,11]
        const res = insertionSort(arr)
        expect(res).toStrictEqual([2,3,5,7,11,13])
    })
})