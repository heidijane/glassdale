import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.associatesDialogContainer')

eventHub.addEventListener("associatesButtonClicked", customEvent => {

    //get the criminal ID from the click event
    const criminalID = customEvent.detail.criminalID

    //get the array of criminals
    const criminalArray = useCriminals()

    //find the criminal with the matching ID
    const chosenCriminal = criminalArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalID)) {
                return true
            }
            return false
        }
    )

    //create the dialog with the corresponding criminal id when the button is clicked
    associatesDialog(chosenCriminal)

    //show the dialog
    document.querySelector('#associatesDialog').showModal()
})

export const associatesDialog = (criminalObject) => {
        contentTarget.innerHTML = `
        <dialog id="associatesDialog">
            <ul>
                ${
                    criminalObject.known_associates.map(currentAssociate => {
                        return `<li>${currentAssociate.name}</li>`
                    }).join('')
                }
            </ul>
        </dialog>
    `
}