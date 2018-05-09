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
  genres: parseElementsToArray($, 'span[itemProp="genre"]'),
  datePublished: $('meta[itemprop="datePublished"]').attr('content'),
  ratingValue: $('span[itemprop="ratingValue"]').text(),
  poster: $('div.poster a img').attr('src'),
  summary: $('div.summary_text').text().trim(),
  directors: parseElementsToArray($, 'span[itemProp="director"]'),
  writers: parseElementsToArray($, '.credit_summary_item span[itemProp="creator"]'),
  stars: parseElementsToArray($, '.credit_summary_item span[itemProp="actors"]')
})

const parseElementsToArray = ($, querySelector) => {
  const result = []
  $(querySelector).map((_, element) => {
    result.push($(element).text().trim())
  })
  return result
}

module.exports = scraperMovieURL
