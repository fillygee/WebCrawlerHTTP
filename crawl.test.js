const {normaliseURL} = require('./crawl')
const {getURLsFromHTML} = require('./crawl')
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



test('normaliseURL capitals', () =>{
    const input = 'https://BLOG.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})
test('getURLsFromHTML absolute', () =>{
    const inputHTMLBody = `<html>
                    <body>
                        <a href="https://blog.boot.dev">
                        Boot.dev Blog
                        </a>
                    </body>
         </html>`
    const inputBaseURL = "https://blog.boot.dev/path/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)

})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `<html>
                    <body>
                        <a href="/path/">
                        Boot.dev Blog
                        </a>
                    </body>
         </html>`
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)

})


test('getURLsFromHTML both relative and absolute', () => {
    const inputHTMLBody = `<html>
                    <body>
            <a href="https://blog.boot.dev/path1/"> Boot.dev Blog Path One </a>
                <a href="/path2/"> Boot.dev Blog Path Two </a>
                    </body>
         </html>`
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"]
    expect(actual).toEqual(expected)

})


test('getURLsFromHTML invalid', () => {
    const inputHTMLBody = `<html>
                    <body>
                        <a href="invalid">
                        Invalid URL
                        </a>
                    </body>
         </html>`
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)

})

test('sortPage 5 pages'
)
