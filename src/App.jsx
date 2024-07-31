import React, {useContext} from 'react';
import Home from "./components/Home";
import NewNote from "./components/NewNote";
import NewNoteProvider, { NewNoteContext } from "./context/NewNoteProvider";

function App() {
  return (
    <NewNoteProvider>
      <AppContent />
    </NewNoteProvider>
  );
}

const AppContent = () => {
  const { addNewNote } = useContext(NewNoteContext);

  return (
    <>
      {!addNewNote && <Home />}
      {addNewNote && <NewNote />}
    </>
  );
};

export default App;
