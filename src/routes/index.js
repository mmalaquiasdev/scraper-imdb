module.exports = server => {
  server.get('/search/:title', require('./handler-search'))
}
