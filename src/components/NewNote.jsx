import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/NoteContextProvider";

const ACTIONS = {
  NOTE_HEADING: "heading",
  NOTE_CONTENT: "content",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NOTE_HEADING:
      return { ...state, noteHeading: action.payload.heading };
    case ACTIONS.NOTE_CONTENT:
      return { ...state, noteContent: action.payload.content };
    default:
      return state;
  }
}

function NewNote() {
  const { notes, addNote } = useContext(NoteContext);

  const [state, dispatch] = useReducer(reducer, {
    noteHeading: "",
    noteContent: "",
  });

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0',);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
  }  

  const handleSave = () => {
    if (state.noteHeading.trim() === "" && state.noteContent.trim() === "") return;

    const date = new Date();
    const newNote = {
      ...state,
      noteTime: date.toLocaleTimeString(),
      noteDate: formatDate(date),
      noteId: Date.now(),
    };

    addNote(newNote);
    dispatch({ type: ACTIONS.NOTE_HEADING, payload: { heading: "" } });
    dispatch({ type: ACTIONS.NOTE_CONTENT, payload: { content: "" } });
  };
  // {console.log(notes)}
  // notes.forEach(note => {
  //   console.log(note.noteId);
  // });

  return (
    <>
      <div className="new-note-container">
        <label className="note-heading">Note Heading </label>
        <input
          type="text"
          maxLength={25}
          className="note-heading-input"
          value={state.noteHeading}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.NOTE_HEADING,
              payload: { heading: e.target.value },
            })
          }
        />

        <label className="note-content">Note Content </label>
        <textarea
          className="note-content-input"
          value={state.noteContent}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.NOTE_CONTENT,
              payload: { content: e.target.value },
            })
          }
        ></textarea>
        <div className="buttons">
          <Link to={"/"}>
            <button className="back-btn">Back</button>
          </Link>

          <Link to={"/"}>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewNote;
