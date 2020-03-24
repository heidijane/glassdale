  import { getCriminals } from "./criminals/CriminalProvider.js"
  import { CriminalList } from "./criminals/CriminalList.js"
  import { getConvictions } from "./convictions/ConvictionProvider.js"
  import ConvictionSelect from "./convictions/ConvictionSelect.js"
  import NoteForm from "./notes/NoteForm.js"
  import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
  import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
  import "./notes/NoteList.js"
  import "./criminals/AssociatesDialog.js"
  import "./witnesses/WitnessList.js"
  import { DisplayWitnessesButton } from "./witnesses/DisplayWitnessesButton.js"
  import { NoteList } from "./notes/NoteList.js"

  getCriminals()
      .then(CriminalList)
      .then(NoteForm)
      .then(NoteList)

  getConvictions().then(ConvictionSelect)

  DisplayNoteFormButton()
  DisplayNotesButton()
  NoteForm()

  DisplayWitnessesButton()