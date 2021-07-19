
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
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            },
            body: {
                describe: 'Note content',
                demandOption: true,
                type: 'string',
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    .command({
        command: "remove",
        describe: "Remove a note",
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    })
    .command({
        command: "list",
        describe: "Print list of notes",
        handler() {
            notes.listNotes()
        }
    })
    .command({
        command: "read",
        describe: "Read a note",
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    })
    .parse()

// yargs().parse();