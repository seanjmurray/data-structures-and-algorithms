const array1 = [1,2,3,4,5];

const reverseArray = (arr) => {
  return arr.reduce((acc,cur) => {
    acc.unshift(cur)
    return acc;
  },[]);
}
console.log(reverseArray(array1));
