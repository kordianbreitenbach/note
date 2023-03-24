import React from 'react'
import '../App.css';
 const Sidebar = ({notes,addNote,deleteNote,activeNote,setActiveNote}) => {


   const sortedNotes=notes.sort((a,b)=>b.lastModified-a.lastModified);



  return (
    <div className="appSidebar">
       <div className="sidebarheader"><h1>Notes</h1>
       <button className="addBtn" onClick={addNote}  >Add</button>
         </div>
       <div className="sidebarnotes">
        {sortedNotes.map((note)=>{return( 
          <div className={`sidebarnote  ${note.id===activeNote && "active"}`} onClick={()=>setActiveNote(note.id)} >
          <div className="sidebarnotetitle">
            <strong>{note.title}</strong>
            <button onClick={()=>deleteNote(note.id)} >DELETE</button>
          </div>
            <p>{note.body&&note.body.substr(0,100)+'...'}</p>
            <small className="note-meta">last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}</small>
         </div>
        )})}
         


       </div>

    </div>
  )
}


export default Sidebar;