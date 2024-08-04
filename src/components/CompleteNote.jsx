import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../context/NoteContextProvider";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function CompleteNote() {
  const { noteId } = useParams(); // gets the noteId from the url
  // console.log(noteId)
  const { notes, deleteNote } = useContext(NoteContext);
  // console.log(notes)

  const [noteHeading, setNoteHeading] = useState("");
  const [noteText, setNoteText] = useState("");
  const [noteTime, setNoteTime] = useState("");
  const [noteDate, setNoteDate] = useState("");

  useEffect(() => {
    if (notes.length > 0) {
      const note = notes.find((n) => n.noteId === Number(noteId));
      if (note) {
        setNoteHeading(note.noteHeading);
        setNoteText(note.noteContent);
        setNoteDate(note.noteDate);
        setNoteTime(note.noteTime);
      }
    }
  }, [noteId, notes]);

  //  const checkfornote = notes.find((n) => n.noteId === Number(noteId))
  //  console.log(checkfornote)

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveChanges = () => {
    const note = notes.find((n) => n.noteId === Number(noteId));
    if (note) {
      note.noteHeading = noteHeading;
      note.noteContent = noteText;
      note.noteTime = new Date().toLocaleTimeString();
    }
  };

  const handleDeleteNote = () => {
    const note = notes.find((n) => n.noteId === Number(noteId));
    deleteNote(note.noteId);
  };

  return (
    <div className="complete-note-container">
      <input
        type="text"
        value={noteHeading}
        // maxLength={50}
        onChange={(e) => setNoteHeading(e.target.value)}
      />
      <textarea value={noteText} onChange={handleChange} />
      <div className="complete-note-time-details">
        <small className="note-time">{noteDate}</small>
        <small> {noteTime}</small>
      </div>
      <div className="complete-note-buttons">
        <Link to={"/"}>
          <button onClick={handleDeleteNote} className="delete-note-btn">
            Delete Note
          </button>
        </Link>
        <Link to={"/"}>
          <button onClick={handleSaveChanges} className="save-changes-btn">
            Save Changes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CompleteNote;
