import { createContext, useState } from "react";

export const NoteContext = createContext();

function NoteContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <NoteContext.Provider value={{ notes, addNote }}>
        {children}
      </NoteContext.Provider>
    </>
  );
}

export default NoteContextProvider;
