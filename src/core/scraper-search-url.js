const { fetchURLToCheerioInstance } = require('../libs')

const url = 'https://www.imdb.com/find?s=tt&ref_=fn_al_tt_mr&q='

const scraperSearchURL = (fetch, term) => {
  return fetchURLToCheerioInstance(fetch, `${url}${term}`).then(parseElementsToMovies)
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
