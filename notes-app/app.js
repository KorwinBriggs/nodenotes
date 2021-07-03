
// const validator = require('validator')
// const getNotes = require('./notes.js')

import chalk from 'chalk'
import notes from './notes.js'

const msg = notes.getNotes()

console.log(msg)

console.log(chalk.green.bold.italic('Success!'))

