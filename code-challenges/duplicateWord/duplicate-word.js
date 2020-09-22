'use strict'

const dupes = (str) => {
    const arr = str.toLowerCase().match(/[a-z]+\b/g)
    if(!arr) {return null}
    while (arr.length) {
      const word = arr.shift()
      if(arr.includes(word)){ return word }
    }
    return null
}

module.exports = dupes
