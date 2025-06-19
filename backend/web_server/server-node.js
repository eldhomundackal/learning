const http = require('http')
const { type } = require('os')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'test/plain')
    res.end("hello")

  }
  else if (req.url === '/book-now') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'test/plain')
    res.end("Booking confirm")

  }
  else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'test/plain')
    res.end("404! Not found")
  }
})

server.listen(port, hostname, () => {
  console.log(`server is listening`)
})