import { useState } from "react";
import { act } from "react-dom/test-utils";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const[notesArray, setNotesArray] = useState([])
  const[activeNote, setActiveNote] = useState(false)
  

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
      />
    </div>
  );
}

export default App;
