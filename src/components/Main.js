import React from 'react'
import ReactMarkdown from "react-markdown";
import '../App.css';

 const Main = ({activeNote,updateNote}) => {

  const editField=(field,value)=>{
    updateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  return (
    <div className="app-main">
         <div className="appMainNoteEdit">
           <input type="text" id="title"  value={activeNote.title} autoFocus onChange={(e)=>{editField("title",e.target.value)}} />
           <textarea id="body" value={activeNote.body} placeholder="notes here" onChange={(e)=>{editField("body",e.target.value)}} />
         </div>
           <div className="appMainNotePreview">
             <h1 className="previewTitle">{activeNote.title}</h1>
                  <ReactMarkdown className="markdownPreview">{activeNote.body}</ReactMarkdown>
           </div>

    </div>
  )
}

export default Main;