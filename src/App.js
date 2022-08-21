import { useEffect, useState } from "react";
// import { act } from "react-dom/test-utils";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const[notesArray, setNotesArray] = useState(JSON.parse(localStorage.notes || []))
  const[activeNote, setActiveNote] = useState(false)

  useEffect(() =>{
    localStorage.setItem("notes", JSON.stringify(notesArray))
  }, [notesArray])


  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled note",
      body: "",
      lastModified: Date.now()
    }

    setNotesArray([newNote, ...notesArray])
  }

  const deleteNote = (idToDelete) =>{
    setNotesArray(notesArray.filter( note => note.id !== idToDelete))
  }

const getActiveNote = () =>{
  return notesArray.find(note => note.id === activeNote)
}

const updateNote = (UpdatedNote) =>{

const updatedNoteArray =notesArray.map( note => {

  if(note.id === activeNote){
    return UpdatedNote
  }

  return note
})

setNotesArray(updatedNoteArray)
}


  return (
    <div className="App">
      <Sidebar
      notes= {notesArray}
      addNote={addNote}
      deleteNote={deleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}

      />

      <Main
     activeNote={getActiveNote()}
     updateNote={updateNote}
      />
    </div>
  );
}

export default App;
