const express = require('express')
const routes = require('../routes')

const factoryServer = () => {
  const server = express()
  routes(server)

  return server
}

module.exports = factoryServer
