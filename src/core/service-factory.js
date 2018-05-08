const scraperSearchURL = require('./scraper-search-url')
const scraperMovieURL = require('./scraper-movie-url')
const serviceFactory = (fetch) => ({
  scraperSearchURL: term => scraperSearchURL(fetch, term),
  scraperMovieURL: imdbID => scraperMovieURL(fetch, imdbID)
})

module.exports = serviceFactory
