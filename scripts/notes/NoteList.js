import { getNotes, useNotes } from "./NoteDataProvider.js"
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

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
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

NoteList()