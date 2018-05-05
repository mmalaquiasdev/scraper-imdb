const scraperSearchURL = require('./scraper-search-url')

const serviceFactory = (fetch) => {
  return {
    scraperSearchURL: term => scraperSearchURL(fetch, term)
  }
}

module.exports = serviceFactory
