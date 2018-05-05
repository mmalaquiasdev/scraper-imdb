const { scraperSearchURL } = require('../core')

const handlerSearch = (req, res) => {
  scraperSearchURL(req.params.title)
    .then(data => res.json(data))
}

module.exports = handlerSearch
