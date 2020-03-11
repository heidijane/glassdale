  import { useCriminals } from "./CriminalProvider.js";
  import { Criminal } from "./Criminal.js";

  const contentTarget = document.querySelector(".criminalsContainer")
  const eventHub = document.querySelector('.container')

  eventHub.addEventListener("crimeChosen", event => {
      //filter the list of criminals who commited the crime  

      //get the criminals
      const criminals = useCriminals();

      //get the crime
      const theCrimeThatWasChosen = event.detail.chosenCrime;

      const guiltyCriminals = criminals.filter(criminal => { //criminal holds each individual array element
          if (criminal.conviction === theCrimeThatWasChosen) {
              return true
          }
          return false
      })

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