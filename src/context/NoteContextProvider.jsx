import { createContext, useState } from "react";

export const NoteContext = createContext();

function NoteContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== id))
  }

  return (
    <>
      <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
        {children}
      </NoteContext.Provider>
    </>
  );
}

export default NoteContextProvider;
