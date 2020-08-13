const binarySearch = require('./array-binary-search');

describe('Happy tests', () => {

  it('Should return correct index', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(arr, 4)).toBe(3)
  })
  it('Should return -1 with low value', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(arr, 0)).toBe(-1)
  })
  it('Should return -1 with high value', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(arr, 11)).toBe(-1)
  })
})
describe('Edge cases', () => {
  it('Should return 237 with large array', () => {
    const arr = Array.from(Array(1000).keys());
    expect(binarySearch(arr, 237)).toBe(237)
  })
  it('Should return -1 with empty array', () => {
    const arr = [];
    expect(binarySearch(arr, 2)).toBe(-1)
  })
})
describe('Expected Failure', () => {
  it('Should return -1 with not sorted array', () => {
    const arr = [10,9,8,7,6,5,4,3,2,1];
    expect(binarySearch(arr, 4)).toBe(-1)
  })
})

