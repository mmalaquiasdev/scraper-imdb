import test from 'ava'
import { fetchURLToCheerioInstance } from '../../src/libs'

test('Simple fetch url to cheerio instance', t => {
  const fetch = (url) => {
    t.is(url, 'https://www.imdb.com/', 'url cannot be differente of arguments')

    return Promise.resolve({
      text: () => `<p>OK!</p>`
    })
  }

  return fetchURLToCheerioInstance(fetch, 'https://www.imdb.com/')
    .then(($) => {
      t.is($.html(), `<html><head></head><body><p>OK!</p></body></html>`)
    })
})
