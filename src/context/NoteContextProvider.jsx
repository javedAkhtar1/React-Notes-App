  import { createContext, useState, useEffect } from "react";

  export const NoteContext = createContext();

  function NoteContextProvider({ children }) {
    const [notes, setNotes] = useState(() => {
      const storedNotes = localStorage.getItem("notes");
      return storedNotes ? JSON.parse(storedNotes) : [];
    });

    const addNote = (note) => {
      setNotes([...notes, note]);
    };

    const deleteNote = (id) => {
      setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== id))
    }

    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
      <>
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
          {children}
        </NoteContext.Provider>
      </>
    );
  }

  export default NoteContextProvider;
