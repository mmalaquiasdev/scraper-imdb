const fetch = require('node-fetch')

const searchInURL = (url, filter) => {
  return fetch(`${url}${filter}`)
    .then((result) => result.text())
    .catch((err) => console.log(err))
}

module.exports = searchInURL
