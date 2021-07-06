
// const validator = require('validator')
// const getNotes = require('./notes.js')

import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import notes from './notes.js'

const yar = yargs(hideBin(process.argv))

// console.log(yargs(hideBin(process.argv)).argv)
// yargs.length;
// yargs().version()
//commands: add, remove, read, list

// create add command
yar.command({
        command: "add",
        describe: "Add a new note",
        handler: () => {
            console.log("Note added")
         }
    })
    .command({
        command: "remove",
        describe: "Remove a note",
        handler: () => {
            console.log("Note removed")
         }
    })
    .command({
        command: "list",
        describe: "Print list of notes",
        handler: () => {
            console.log("Listing notes...")
        }
    })
    .command({
        command: "read",
        describe: "Read a note",
        handler: () => {
            console.log("Displaying note...")
        }
    })
    .argv

// yargs().parse();