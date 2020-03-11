/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector('.container')

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === 'crimeSelect') {
        // Create custom event. Provide an appropriate name.
        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                chosenCrime: changeEvent.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})

const ConvictionSelect = () => {
        // Get all convictions from application state
        const convictions = useConvictions()

        const render = convictionsCollection => {
                contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(singleConviction => {
                        return `<option>${singleConviction.name}</option>`
                    })
                }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect