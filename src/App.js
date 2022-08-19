import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const[notesArray, setNotesArray] = useState([])
  const addNote = () => {
    console.log("Item added")
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
