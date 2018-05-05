const express = require('express')
const routes = require('../routes')
const plugins = require('./plugins')

const factoryServer = () => {
  const server = express()
  plugins(server)
  routes(server)

  return server
}

module.exports = factoryServer
