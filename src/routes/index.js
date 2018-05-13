module.exports = server => {
  server.get('/movie/search/:title', require('./handler-search')),
  server.get('/movie/:imdbID', require('./handler-movie'))
}
