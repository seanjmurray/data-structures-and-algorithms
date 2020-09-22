'use strict'

const dupes = require('./duplicate-word')

describe('Testing duplicate words', () => {
    it('Should find first dupe', () => {
        const str = 'Once upon a time, there was a brave princess who...'
        const res = dupes(str)
        expect(res).toBe('a')
    })
    it('Should return null with empty string', () => {
        const str = ' '
        const res = dupes(str)
        expect(res).toBeNull()
    })
    it('Should return null with no repeats', () => {
        const str = 'This has no repeating words'
        const res = dupes(str)
        expect(res).toBeNull()
    })
})