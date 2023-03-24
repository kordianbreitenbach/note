import React, { useState ,useEffect} from 'react'
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from "react-uuid";

function App() {
  const [notes,setNotes]=useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote=()=>{
    const newNote={
      id:uuid(),
      title:"Note",
      body:"",
      lastModified: Date.now(),
    };
    setNotes([newNote,...notes]);
  }

  const deleteNote=(noted)=>{
    setNotes(notes.filter(({ id }) => id !== noted));
  }


  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  const updateNote =(updatedNote)=>{
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  }

  return (
    <div className="App">
    
    <Sidebar notes={notes} addNote={addNote} deleteNote={deleteNote}   activeNote={activeNote}
        setActiveNote={setActiveNote} />
    <Main activeNote={getActiveNote()} updateNote={updateNote}   />
    </div>
  );
}

export default App;
