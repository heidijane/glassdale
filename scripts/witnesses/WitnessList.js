import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { Witness } from "./Witness.js"

const contentTarget = document.querySelector(".personsContainer")
const eventHub = document.querySelector('.container')


eventHub.addEventListener("witnessButtonClicked", customEvent => {
    WitnessList()
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