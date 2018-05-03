const { scraper } = require('./core/index')
const cheerio = require('cheerio')

const search = (url, filter) => {
  scraper(url, filter)
    .then((res) => {
      const movies = []
      const $ = cheerio.load(res)
      $('.findResult').each((index, element) => {
        const $primaryPhoto = $(element).find('td.primary_photo a img')
        const $title = $(element).find('td.result_text a')

        movies.push(createMovie($primaryPhoto, $title))
        console.log(movies)
      })
    })
}

const createMovie = ($image, $title) => {
  return {
    image: $image.attr('src'),
    title: $title.text()
  }
}

module.exports = search
