import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
let visibility = false

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("hidden")
    } else {
        contentTarget.classList.add("hidden")
    }
})

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

const render = () => {
    contentTarget.classList.add("hidden")
    getNotes().then(() => {
        const allTheNotes = useNotes()
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