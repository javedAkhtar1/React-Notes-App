import React, { useReducer, useState } from "react";

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
  const [state, dispatch] = useReducer(reducer, {
    noteHeading: "",
    noteContent: "",
  });

  const [notes, setNotes] = useState([]);

  const handleSave = () => {
    if (state.noteHeading.trim() === "" && state.noteContent.trim() === "") return;
    
    const date = new Date();
    const newNote = {
      ...state,
      noteTime: date.toLocaleTimeString(),
      noteDate: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);

    dispatch({ type: ACTIONS.NOTE_HEADING, payload: { heading: "" } });
    dispatch({ type: ACTIONS.NOTE_CONTENT, payload: { content: "" } });
  };
  // {console.log(notes)}

  return (
    <>
      <div className="new-note-container">
        <label className="note-heading">Note Heading </label>
        <input
          type="text"
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
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
}

export default NewNote;
