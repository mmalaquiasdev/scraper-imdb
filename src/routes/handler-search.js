const handlerSearch = (req, res) => {
  req.$imdb.scraperSearchURL(req.params.title)
    .then(data => res.json(data))
}

module.exports = handlerSearch
