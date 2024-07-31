import React from "react";
import Note from "./Note";

function Home() {
  return (
    <>
      <div className="top-section">
        <h1 className="main-heading">JNotes.</h1>
        <button className="add-btn">
          Add new note
        </button>
      </div>
      <div className="notes-container">
        <Note />
        <Note />
      </div>
    </>
  );
}

export default Home;
