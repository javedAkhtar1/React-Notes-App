import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/NoteContextProvider";

function Note({ noteId, heading, content, date, time }) {
  return (
    <Link to={`/notes/${noteId}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="note">
        <div className="note-details">
          <h1>{heading.length > 0 ? heading : "[no heading]"}</h1>
          <p style={{ marginTop: "5px" }}>{content}</p>
        </div>
        <div className="note-time-details">
          <small className="note-time">{date}</small>
          <small>{time}</small>
        </div>
      </div>
    </Link>
  );
}

export default Note;
