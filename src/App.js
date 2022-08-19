import { useState } from "react";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const[notesArray, setNotesArray] = useState([])

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled note",
      body: "",
      lastModified: Date.now()
    }

    setNotesArray([newNote, ...notesArray])
  }

  return (
    <div className="App">
      <Sidebar
      notes= {notesArray}
      addNote={addNote}
      />
      <Main/>
    </div>
  );
}

export default App;
