  import { useCriminals } from "./CriminalProvider.js";
  import { Criminal } from "./Criminal.js";

  const contentTarget = document.querySelector(".criminalsContainer")
  const eventHub = document.querySelector('.container')
  let visibility = true

  //create a click event for when the Known Associates button is clicked
  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("associates--")) {

          const [prefix, criminalID] = clickEvent.target.id.split('--')

          const showAssociatesEvent = new CustomEvent("associatesButtonClicked", {
              detail: {
                  criminalID: criminalID
              }
          })


          eventHub.dispatchEvent(showAssociatesEvent)
      }
  })

  eventHub.addEventListener("witnessButtonClicked", customEvent => {
      visibility = !visibility

      if (visibility === true) {
          contentTarget.classList.remove("hidden")
      } else {
          contentTarget.classList.add("hidden")
      }
  })

  eventHub.addEventListener("crimeChosen", event => {
      //filter the list of criminals who commited the crime  

      //get the criminals
      const criminals = useCriminals();

      //get the crime
      const theCrimeThatWasChosen = event.detail.chosenCrime;

      let guiltyCriminals = []

      if (theCrimeThatWasChosen === "0") {
          //if user selects the top option bring back the entire list of criminals
          guiltyCriminals = criminals
      } else {
          //user selected a crime, filter the list
          guiltyCriminals = criminals.filter(criminal => { //criminal holds each individual array element
              if (criminal.conviction === theCrimeThatWasChosen) {
                  return true
              }
              return false
          })
      }

      //clear the code out before building the list back up again       
      contentTarget.innerHTML = ""

      //build the list back up again
      for (const singleCriminal of guiltyCriminals) {
          contentTarget.innerHTML += Criminal(singleCriminal)
      }
  })

  export const CriminalList = () => {
      const criminals = useCriminals()

      for (const singleCriminal of criminals) {
          contentTarget.innerHTML += Criminal(singleCriminal)
      }
  }