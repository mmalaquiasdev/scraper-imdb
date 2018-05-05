const { scraper } = require('./core')
const cheerio = require('cheerio')

const search = (url, filter) => {
  scraper(url, filter)
    .then((res) => {
      const movies = []
      const $ = cheerio.load(res)
      $('.findResult').each((index, element) => {
        movies.push(createMovie($, element))
        console.log(movies)
      })
    })
}

const createMovie = ($, element) => {
  return {
    image: $(element).find('td.primary_photo a img').attr('src'),
    title: $(element).find('td.result_text a').text()
  }
}

module.exports = search
