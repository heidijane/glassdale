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

//close the dialog when close button is pressed
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("close--")) {
        //close the dialog box
        clickEvent.target.parentNode.close()
    }
})

export const associatesDialog = (criminalObject) => {
        //get criminal's first name
        const [firstName, lastName] = criminalObject.name.split(" ")

        contentTarget.innerHTML = `
        <dialog id="associatesDialog">
                ${
                    criminalObject.known_associates.map(currentAssociate => {
                        return `<p>${currentAssociate.name} claims suspect was ${currentAssociate.alibi}</p>`
                    }).join('')
                }
            <div id="associatesDialog__header">${firstName}'s Known Associates</div>
            <div id="close--${criminalObject.id}" class="button--close">X</div>
        </dialog>
    `
}