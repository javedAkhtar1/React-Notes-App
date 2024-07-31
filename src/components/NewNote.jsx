import React, { useState } from "react";

function NewNote() {
  const [noteHeading, setNoteHeading] = useState("");
  const [noteContent, setNoteContent] = useState("");

  return (
    <>
      <div className="new-note-container">
        <label className="note-heading">Note Heading </label>
        <input
          type="text"
          className="note-heading-input"
          value={noteHeading}
          onChange={(e) => setNoteHeading(e.target.value)}
        />

        <label className="note-content">Note Content </label>
        <textarea
          className="note-content-input"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
        <button className="save-btn">Save</button>
      </div>
    </>
  );
}

export default NewNote;
