import React, { useContext } from "react";
import Note from "./Note";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/NoteContextProvider";

function Home() {
  const { notes } = useContext(NoteContext);
  return (
    <>
      <div className="top-section">
        <h1 className="main-heading">JNotes.</h1>
        <Link to="/new-note">
          <button className="add-btn">Add new note</button>
        </Link>
      </div>

      {notes.length === 0 ? (
        <h3 className="no-note">You have no notes. Add a new note!</h3>
      ) : (
        <div className="notes-container">
          {notes.map((note, index) => (
            <Note
              key={note.noteId}
              index={index}
              noteId={note.noteId} 
              heading={note.noteHeading}
              content={note.noteContent}
              date={note.noteDate}
              time={note.noteTime}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
