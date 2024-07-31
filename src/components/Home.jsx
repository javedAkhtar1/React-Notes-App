import React, { useContext } from "react";
import Note from "./Note";
import { NewNoteContext } from "../context/NewNoteProvider";

function Home() {
  const { setAddNewNote } = useContext(NewNoteContext);
  return (
    <>
      <div className="top-section">
        <h1 className="main-heading">JNotes.</h1>
        <button className="add-btn" onClick={() => setAddNewNote(true)}>
          Add new note
        </button>
      </div>
      <div className="notes-container">
        <Note />
      </div>
    </>
  );
}

export default Home;
