  import { getCriminals } from "./criminals/CriminalProvider.js"
  import { CriminalList } from "./criminals/CriminalList.js"
  import { getConvictions } from "./convictions/ConvictionProvider.js"
  import ConvictionSelect from "./convictions/ConvictionSelect.js"
  import NoteForm from "./notes/NoteForm.js"
  import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
  import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
  import "./notes/NoteList.js"

  getCriminals().then(CriminalList)

  getConvictions().then(ConvictionSelect)

  DisplayNoteFormButton()
  DisplayNotesButton()
  NoteForm()