import { saveNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    const button = document.querySelector("#showNoteForm")

    //change the visibility of the note form when the button is clicked
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("hidden")
        button.innerHTML = "Hide Note Form"
    } else {
        contentTarget.classList.add("hidden")
        button.innerHTML = "Show Note Form"
    }

})

const render = () => {
    contentTarget.classList.add("hidden")
    contentTarget.innerHTML = `
        <div class="break"></div>
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

        let subject = document.getElementById("note-subject").value
        let text = document.getElementById("note-text").value

        //Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: Date.now(),
            subject: subject,
            text: text
        }

        //clear out the current data in the form so that new data can be entered
        document.getElementById("note-subject").value = ''
        document.getElementById("note-text").value = ''

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    render()
}

export default NoteForm