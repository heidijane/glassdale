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
    notesCollection.reverse()
    contentTarget.innerHTML = notesCollection.map(
        currentNoteObject => {
            const foundCriminalObject = criminalCollection.find(criminal => criminal.id === currentNoteObject.criminalID)
            return Note(currentNoteObject, foundCriminalObject)
        }
    ).join("<hr>")
}

export const NoteList = () => {

    render()
}

NoteList()