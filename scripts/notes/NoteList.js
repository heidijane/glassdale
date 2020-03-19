import { getNotes, useNotes } from "./NoteDataProvider.js"
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
        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return Note(currentNoteObject)
            }
        ).join("<hr>")
    })
}

export const NoteList = () => {
    render()
}

NoteList()