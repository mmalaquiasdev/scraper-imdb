const cheerio = require('cheerio')

const fetchURLToCheerioInstance = (fetch, url) => {
  return fetch(url)
    .then(result => result.text())
    .then(data => cheerio.load(data))
}

module.exports = fetchURLToCheerioInstance
