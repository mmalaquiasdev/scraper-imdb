module.exports = server => {
  server.get('/search/:title', require('./handler-search')),
  server.get('/movie/:imdbID', require('./handler-movie'))
}
