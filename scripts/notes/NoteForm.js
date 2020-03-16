import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset>
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

        const subject = document.getElementById("note-subject").value
        const text = document.getElementById("note-text").value

        //Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: Date.now(),
            subject: subject,
            text: text
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    render()
}

export default NoteForm