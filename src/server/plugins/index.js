const plugins = [
  require('./imdb')
]

const registerPlugins = (server) => {
  plugins.forEach((plugin) => plugin(server))
}

module.exports = registerPlugins
