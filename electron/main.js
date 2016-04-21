'use strict'

const app = require('electron').app
const BrowserWindow = require('electron').BrowserWindow
const join = require('path').join
const server = require('./controller/server')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  // mainWindow.loadURL(join('file://', __dirname, 'browser', 'index.html'))
  mainWindow.loadURL('http://localhost:8080/')
  mainWindow.on('closed', function windowClosed () {
    mainWindow = null
  })
  server(mainWindow)
}

app.on('ready', createWindow)

app.on('window-all-closed', function allWindowClosed () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function activateWindow () {
  if (mainWindow === null) {
    createWindow()
  }
})

exports.mainWindow = mainWindow
