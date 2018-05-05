const { scraperSearchURL } = require('./src/core')
const express = require('express')()

const port = process.env.PORT || 3000
express.listen(port, () => console.log(`Listening on ${port}`))

express.get('/', (req, res) => {
  res.json({
    message: 'Scraping is working :)'
  })
})

const imdbSearchURL = 'https://www.imdb.com/find?s=tt&ref_=fn_al_tt_mr&q='
express.get('/search/:title', (req, res) => {
  scraperSearchURL(imdbSearchURL, req.params.title)
    .then(data => res.json(data))
    .catch(err => console.error(err))
})
