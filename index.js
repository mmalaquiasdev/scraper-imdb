const { factoryServer } = require('./src/server')

const server = factoryServer()

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Listening on ${port}`))
