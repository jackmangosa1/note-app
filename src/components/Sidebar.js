function Sidebar({notes, addNote}){
    return(

    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={addNote}>Add</button>
        </div>

        <div className="app-sidebar-notes">
       {notes.map(note => (

        <div className="app-sidebar-note">
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
                Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit"

                })}

            </small>
        </div>
       ))}
             
              
             
        </div>
    </div>
)
}

export default Sidebar