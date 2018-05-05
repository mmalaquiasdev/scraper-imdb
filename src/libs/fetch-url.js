const fetch = require('node-fetch')
const cheerio = require('cheerio')

const fetchURL = (url, filter) => {
  return fetch(`${url}${filter}`)
    .then((result) => result.text())
    .then((data) => cheerio.load(data))
}

module.exports = fetchURL
