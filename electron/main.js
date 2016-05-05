'use strict'

const { app, BrowserWindow } = require('electron')
const { join } = require('path')
const is = require('is-electron')
const server = require('./controller/server')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (is.production()) {
    mainWindow.loadURL(join('file://', __dirname, 'browser', 'index.html'))
  } else {
    mainWindow.loadURL('http://localhost:8080/')
  }

  mainWindow.on('closed', function windowClosed () {
    mainWindow = null
  })
  server(mainWindow)
}

app.on('ready', createWindow)

app.on('window-all-closed', function allWindowClosed () {
  if (!is.mac()) {
    app.quit()
  }
})

app.on('activate', function activateWindow () {
  if (mainWindow === null) {
    createWindow()
  }
})
