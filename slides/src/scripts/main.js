// Require Node modules in the browser thanks to Browserify: http://browserify.org
const bespoke = require('bespoke')
const cube = require('bespoke-theme-cube')
const keys = require('bespoke-keys')
const touch = require('bespoke-touch')
const bullets = require('bespoke-bullets')
const backdrop = require('bespoke-backdrop')
const scale = require('bespoke-scale')
const hash = require('bespoke-hash')
const progress = require('bespoke-progress')
const forms = require('bespoke-forms')

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
])

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism')
