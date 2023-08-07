const {normaliseURL} = require('./crawl')
const {test, expect} = require('@jest/globals')

test('normaliseURL strip protocol', () =>{
    const input = 'https://blog.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})


test('normaliseURL strip traling slash', () =>{
    const input = 'https://blog.boot.dev/path/'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})


test('normaliseURL capitals', () =>{
    const input = 'https://BLOG.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})


test('normaliseURL strip http', () =>{
    const input = 'http://blog.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})
