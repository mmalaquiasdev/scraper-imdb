const { fetchURLToCheerioInstance } = require('../libs')

const url = 'https://www.imdb.com/title/'

const scraperMovieURL = (fetch, imdbID) => {
  return fetchURLToCheerioInstance(fetch, `${url}${imdbID}`)
    .then(parseElementsToMovie)
}

const parseElementsToMovie = $ => ({
  title: $('.title_wrapper h1').text().trim()
})

module.exports = scraperMovieURL
