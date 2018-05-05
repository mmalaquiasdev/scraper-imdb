const { scraperSearchURL } = require('../core')
const fetch = require('node-fetch')

const handlerSearch = (req, res) => {
  scraperSearchURL(fetch, req.params.title)
    .then(data => res.json(data))
}

module.exports = handlerSearch
