function Main({ activeNote, updateNote }){
   
    const editField = (key, value) =>{
     updateNote(
        {
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        }
     )
    }

    if(!activeNote){
        return <h1 className="no-active-note">No note selected</h1>
    }
    return(
    <div className="app-main">
        <div className="app-main-note-edit">

            <input 
                type="text" 
                id="title"  
                value={activeNote.title} 
                name="title"
                onChange={(e) =>editField("title", e.target.value)}  
                autoFocus
             />

            <textarea 
                id="body"  
                value={activeNote.body}
                name="body"
                onChange={(e) => editField("body", e.target.value)}  
                placeholder="Write your text here...">

            </textarea>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <div className="markdown-preview">{activeNote.body}</div>

        </div>
    </div>
)
}

export default Main