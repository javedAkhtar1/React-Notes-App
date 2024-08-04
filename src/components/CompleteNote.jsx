import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../context/NoteContextProvider";
import { useParams } from "react-router";

function CompleteNote() {
  const {noteId} = useParams(); // gets the noteId from the url 
  // console.log(noteId)
  const {notes} = useContext(NoteContext)
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

  return (
    <div className="complete-note-container">
      <input
        type="text"
        value={noteHeading}
        maxLength={50}
        onChange={(e) => setNoteHeading(e.target.value)}
      />
      <textarea value={noteText} onChange={handleChange} />
      <div className="complete-note-time-details">
        <small className="note-time">{noteDate}</small>
        <small> {noteTime}</small>
      </div>
      <div className="complete-note-buttons">
      <button className="save-changes-btn">Save Changes</button>
      <button className="delete-note-btn">Delete Note</button>
      </div>
    </div>
  );
}

export default CompleteNote;
