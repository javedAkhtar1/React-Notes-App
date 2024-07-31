import React from "react";
import Note from "./Note";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="top-section">
        <h1 className="main-heading">JNotes.</h1>
        <Link to={'/new-note'}>
         <button className="add-btn">
          Add new note
        </button>
        </Link>
      </div>
      <div className="notes-container">
        <Note />
        <Note />
      </div>
    </>
  );
}

export default Home;
