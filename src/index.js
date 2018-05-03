const { searchInURL } = require('./libs/index')
const cheerio = require('cheerio')

const url = 'https://www.imdb.com/find?s=tt&ref_=fn_al_tt_mr&q='

searchInURL(url, 'star wars')
  .then((res) => {
    const $ = cheerio.load(res)
    $('.findResult')
      .each((index, element) => {
        const $element = $(element)
        console.log($element.text())
      })
  })
