const handlerMovie = (req, res) => {
  req.$imdb.scraperMovieURL(req.params.imdbID)
    .then(data => res.json(data))
}

module.exports = handlerMovie
