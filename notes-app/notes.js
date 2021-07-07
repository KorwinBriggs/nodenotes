import fs from 'fs'
import chalk from 'chalk'
import { Console } from 'console'

const bad = (chalk.red.bold.inverse)
const good = (chalk.green.bold.inverse)

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title)

    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body,
        })
        
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
    readNote
}