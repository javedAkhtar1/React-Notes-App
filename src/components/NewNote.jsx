import React from "react";

function NewNote() {
  return (
    <>
      <div className="new-note-container">
        <label className="note-heading">Note Heading: </label>
        <input type="text" className="note-heading-input" />

        <label className="note-content">Note Content: </label>
        <textarea className="note-content-input" name="" id=""></textarea>
        <button className="save-btn">Save</button>
      </div>
    </>
  );
}

export default NewNote;
