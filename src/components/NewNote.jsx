import React, { useReducer } from "react";

const ACTIONS = {
  NOTE_HEADING: "heading",
  NOTE_CONTENT: "content",
  NOTE_TIME: "time",
  NOTE_DATE: "date",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NOTE_HEADING:
      return { ...state, noteHeading: action.payload.heading };
    case ACTIONS.NOTE_CONTENT:
      return { ...state, noteContent: action.payload.content };
    case ACTIONS.NOTE_TIME:
      return { ...state, noteTime: action.payload.time };
    case ACTIONS.NOTE_DATE:
      return { ...state, noteDate: action.payload.content };
    default:
      return state;
  }
}

function NewNote() {
  const [state, dispatch] = useReducer(reducer, {
    noteHeading: "",
    noteContent: "",
    noteTime: "",
    noteDate: "",
  });

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
        <button className="save-btn">Save</button>
      </div>
    </>
  );
}

export default NewNote;
