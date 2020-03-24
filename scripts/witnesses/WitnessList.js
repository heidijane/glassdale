import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { Witness } from "./Witness.js"

const contentTarget = document.querySelector(".witnessContainer")
const eventHub = document.querySelector('.container')
let visibility = false


eventHub.addEventListener("witnessButtonClicked", customEvent => {
    const button = document.querySelector("#showWitnesses")

    WitnessList()

    visibility = !visibility

    if (visibility === true) {
        contentTarget.classList.remove("hidden")
        button.innerHTML = "Show Criminals"
    } else {
        contentTarget.classList.add("hidden")
        button.innerHTML = "Show Witnesses"
    }

})

const render = () => {
    getWitnesses().then(() => {
        const allWitnesses = useWitnesses()
        contentTarget.innerHTML = allWitnesses.map(
            currentWitness => {
                return Witness(currentWitness)
            }
        ).join('')
    })
}

export const WitnessList = () => {
    render()
}