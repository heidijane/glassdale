/*
    Generates the criminals to select from in the note form
*/

export const GenerateCriminalSelectOptions = (arrayOfCriminalObjects) => {

    const contentTarget = document.querySelector("#note-criminal")

    arrayOfCriminalObjects.forEach(criminal => {
        //create an option tag that shows the criminal's name and submits a value of the criminal's ID
        contentTarget.innerHTML += `<option value="${criminal.id}">${criminal.name}</option>`
    })

}