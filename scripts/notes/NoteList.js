import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
let visibility = false

eventHub.addEventListener("allNotesClicked", customEvent => {
    const button = document.querySelector("#showAllNotes")
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("hidden")
        button.innerHTML = "Hide All Notes"
    } else {
        contentTarget.classList.add("hidden")
        button.innerHTML = "Show All Notes"
    }
})

//renders the form again when there has been a change to the note data, for instance when a note is added or deleted
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        //delete the note with the corresponding id
        deleteNote(id)

        //the state change is set in the deleteNote function, so the list will re-render
    }
})

const render = () => {
    getNotes().then(() => {
        const allTheNotes = useNotes()
        allTheNotes.reverse()

        const allTheCriminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNote => {
                const foundCriminal = allTheCriminals.find(criminal => criminal.id === currentNote.criminalID)
                return Note(currentNote, foundCriminal)
            }
        ).join('')
    })
}

export const NoteList = () => {

    render()
}