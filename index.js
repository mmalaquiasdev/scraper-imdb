const { scraper } = require('./src/core')
const express = require('express')()

const port = process.env.PORT || 3000
express.listen(port, () => console.log(`Listening on ${port}`))

express.get('/', (req, res) => {
  res.json({
    message: 'Scraping is working :)'
  })
})

// scraper('https://www.imdb.com/find?s=tt&ref_=fn_al_tt_mr&q=', 'star wars')
