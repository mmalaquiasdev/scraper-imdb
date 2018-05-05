const { scraperSearchURL, scraperMovieURL } = require('./src/core')
const express = require('express')()

const port = process.env.PORT || 3000
express.listen(port, () => console.log(`Listening on ${port}`))

express.get('/', (req, res) => {
  res.json({
    message: 'Scraping is working :)'
  })
})

const imdbMovieURL = 'https://www.imdb.com/title/'

express.get('/search/:title', (req, res) => {
  scraperSearchURL(req.params.title)
    .then(data => res.json(data))
})

express.get('/movie/:imdbID', (req, res) => {
  scraperMovieURL(imdbMovieURL, req.params.imdbID)
    .then(data => res.json(data))
})
