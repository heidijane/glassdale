import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <fieldset>
    <label for="note-date">Date</label>
        <input type="date" id="note-date">
        <label for="note-subject">Subject</label>
        <input type="text" id="note-subject">
        <label for="note-text">Note</label>
        <textarea id="note-text" rows="4" cols="50"></textarea>
        <button id="saveNote">Save Note</button>
        </fieldset>
    `
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        //Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: document.getElementById("note-date").value,
            subject: document.getElementById("note-subject").value,
            text: document.getElementById("note-text").value
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    render()
}

export default NoteForm