const { fetchURL } = require('../libs')
const scraperSearchURL = (url, filter) => {
  return fetchURL(url, filter)
    .then(($) => parseElementsToMovies($))
    .catch((err) => { throw err })
}

const parseElementsToMovies = ($) => {
  const movies = []
  $('.findResult').each((index, element) => movies.push(createMovie($, element)))
  return movies
}

const createMovie = ($, element) => {
  return {
    image: $(element).find('td.primary_photo a img').attr('src'),
    title: $(element).find('td.result_text a').text(),
    imdbID: $(element).find('td.result_text a').attr('href').match(/title\/(.*)\//)[1]
  }
}

module.exports = scraperSearchURL
