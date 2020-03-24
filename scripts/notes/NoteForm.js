import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

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

        const ArrayOfCriminalObjects = useCriminals()

        contentTarget.classList.add("hidden")
        contentTarget.innerHTML = `
        <div class="break"></div>
        <fieldset>
            <p>
                <label for="note-criminal">Criminal</label><br />
                <select id="note-criminal">
                <option value="">Please choose a criminal...</option>
                ${
                    ArrayOfCriminalObjects.map(singleCriminalObject => {
                        return `<option value="${singleCriminalObject.id}">${singleCriminalObject.name}</option>`
                    }).join("")
                }
                </select>
            </p>
            <p>
                <label for="note-text">Note</label><br />
                <textarea id="note-text" rows="4" cols="50"></textarea>
            </p>
            <p>
                <button id="saveNote">Save Note</button>
            </p>
        </fieldset>
    `
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        let criminalID = parseInt(document.getElementById("note-criminal").value)
        let text = document.getElementById("note-text").value

        //Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: Date.now(),
            criminalID: criminalID,
            text: text
        }

        //clear out the current data in the form so that new data can be entered
        document.getElementById("note-criminal").value = ''
        document.getElementById("note-text").value = ''

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    render()
}

export default NoteForm