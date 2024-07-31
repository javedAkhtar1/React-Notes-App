import React, { createContext, useState } from 'react';

export const NewNoteContext = createContext();

function NewNoteProvider({ children }) {
  const [addNewNote, setAddNewNote] = useState(false);
  
  return (
    <NewNoteContext.Provider value={{ addNewNote, setAddNewNote }}>
      {children}
    </NewNoteContext.Provider>
  );
}

export default NewNoteProvider;
