
// const validator = require('validator')
// const getNotes = require('./notes.js')

import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import notes from './notes.js'

const yar = yargs(hideBin(process.argv))


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
            },
            category: {
                describe: 'Note category',
                demandOption: false,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body, argv.category)
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
    .command({
        command: "categories",
        describe: "List all categories",
        handler () {
            notes.listCategories();
        }
    })
    .command({
        command: "category",
        describe: "List notes within category",
        builder: {
            title: {
                describe: 'Note category title',
                demandOption: true,
                type: 'string',
            }
        },
        handler (argv) {
            notes.listCategory(argv.title)
        }
    })

    .parse()

// yargs().parse();