const contentTarget = document.querySelector(".witnesses__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {

        const witnessButtonEvent = new CustomEvent("witnessButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(witnessButtonEvent)
    }
})

export const DisplayWitnessesButton = () => {
    contentTarget.innerHTML = "<button id='showWitnesses'>Show Witnesses</button>"
}