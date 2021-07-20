import fs from 'fs'
import chalk from 'chalk'
import { Console } from 'console'
import { doesNotThrow } from 'assert'

const bad = (chalk.red.bold.inverse)
const good = (chalk.green.bold.inverse)

const addNote = (title, body, category) => {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title)

    if (!duplicateNote) {

        let note = {title: title,
                    body: body,
                    category: "Uncategorized"}

        if (category) {
            note.category = category
        }

        notes.push(note)
        
        saveNotes(notes)
        console.log(good(" Note added "))
    } else {
        console.log(bad(" ERROR: Note title taken! "))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    let remainingNotes = notes.filter( (note) => note.title !== title )
    
    if (remainingNotes.length !== notes.length) {
        saveNotes(remainingNotes)
        console.log(good(" Note removed "))

    } else {
        console.log(bad(" ERROR: Note not found "))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse(" Your notes: "))
    notes.forEach(note => {
        console.log(' ' + note.title)
    });
}

const listCategories = () => {
    const notes = loadNotes()
    let categories = []
    notes.forEach(note => {
        if (!categories.includes(note.category)) categories.push(note.category)
    })
    console.log(chalk.inverse(' Categories: '))
    categories.forEach( category => console.log(' ' + category) )
}

const listCategory = (category) => {
    const notes = loadNotes()
    let titles = [];
    notes.forEach(note => {
        if (note.category === category) titles.push(note.title)
    })

    if (titles.length < 1) console.log(bad(' No notes in category '+category+' '))
    else {
    console.log(chalk.inverse(' Notes in Category: ' + category + ' '))
    titles.forEach( title => console.log(' ' + title) )
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const thisNote = notes.find( (note) => note.title === title)
    
    if (thisNote) {
        console.log(chalk.inverse(' ' + thisNote.title + ' '))
        console.log(' ' + thisNote.body)
    } else {
        console.log(bad(" ERROR: Note not found "))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

export default {
    addNote, 
    removeNote, 
    listNotes, 
    listCategories,
    listCategory,
    readNote
}