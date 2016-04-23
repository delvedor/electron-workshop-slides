'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.join('controller', 'controller.html'), 'utf8')
let mainWindow = null

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end()

  if (req.url === '/forward') {
    mainWindow.webContents.sendInputEvent({
      type: 'keyDown',
      keyCode: 'Right'
    })
  } else if (req.url === '/backward') {
    mainWindow.webContents.sendInputEvent({
      type: 'keyDown',
      keyCode: 'Left'
    })
  } else {
    console.log(req.url)
  }

  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'bar')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(html)
})

function startServer (window) {
  mainWindow = window
  server.listen(3000)
}

module.exports = startServer
