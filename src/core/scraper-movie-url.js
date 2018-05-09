const { fetchURLToCheerioInstance } = require('../libs')

const url = 'https://www.imdb.com/title/'

const scraperMovieURL = (fetch, imdbID) => {
  return fetchURLToCheerioInstance(fetch, `${url}${imdbID}`)
    .then(parseElementsToMovie)
}

const parseElementsToMovie = $ => ({
  title: $('.title_wrapper h1').contents().first().text().trim(),
  rating: $('meta[itemprop="contentRating"]').attr('content'),
  duration: $('time[itemprop=duration]').contents().first().text().trim(),
  genres: parseElementsToGenres($),
  datePublished: $('meta[itemprop="datePublished"]').attr('content'),
  ratingValue: $('span[itemprop="ratingValue"]').text(),
  poster: $('div.poster a img').attr('src'),
  summary: $('div.summary_text').text().trim()
})

const parseElementsToGenres = $ => {
  const genres = []
  $('span[itemProp="genre"]').map((_, element) => {
    genres.push($(element).text())
  })
  return genres
}

module.exports = scraperMovieURL
