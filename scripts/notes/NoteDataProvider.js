const eventHub = document.querySelector(".container")

//this function creates a custom event that should be run when the notes list has changed in some way
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

//creates a copy of the notes from the API
export const useNotes = () => {
    return notes.slice()
}

//gets the notes from the local API
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

//deletes a note and changes the note state
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
        .then(getNotes)
        //change the note state so that the event listener will know to rerender the notes
        .then(dispatchStateChangeEvent)
}

//deletes a note and changes the note state
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
            method: "DELETE"
        })
        .then(getNotes)
        //change the note state so that the event listener will know to rerender the notes
        .then(dispatchStateChangeEvent)
}