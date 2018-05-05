const { serviceFactory } = require('../../core')
const fetch = require('node-fetch')

const imdbPlugin = (server) => {
  const service = serviceFactory(fetch)
  server.use((req, res, next) => {
    req.$imdb = service
    next()
  })
}

module.exports = imdbPlugin
