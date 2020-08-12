
const insertShiftArray = (arr,num) => {
  const first = arr.slice(0,Math.floor(arr.length/2))
  const second = arr.slice(Math.floor(arr.length/2), arr.length)
  return [...first,Number(num),...second]
};

describe('Expected cases', () => {
  it('should insert 5 into the middle of array', () => {
    let array = [2,4,6,8];
    let test = insertShiftArray(array,5)
    expect(test[2]).toBe(5)
  })
})
describe('Edge Cases', () => {
  it('should insert 5 into empty array', () => {
    let array = [];
    let test = insertShiftArray(array,5)
    expect(test[0]).toBe(5)
  })
  it('should insert \'5\' into array as a number', () => {
    let array = [4,8,15,23,42,50];
    let test = insertShiftArray(array,'5')
    expect(test[3]).toBe(5)
  })
  it('should insert 5 into large array', () => {
    let array = new Array(100000).fill(1)
    let test = insertShiftArray(array,5)
    expect(test[50000]).toBe(5)
  })
})
