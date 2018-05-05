const fetch = require('node-fetch')

const fetchURL = (url, filter) => {
  return fetch(`${url}${filter}`)
    .then((result) => result.text())
    .catch((err) => { throw err })
}

module.exports = fetchURL
