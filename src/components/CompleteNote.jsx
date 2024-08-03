import React, { useState } from "react";

function CompleteNote() {
  const [noteHeading, setNoteHeading] = useState("Heading");
  const [noteText, setNoteText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel voluptas accusamus iste distinctio beatae numquam rerum earum ea animi? Incidunt dolores nihil laboriosam reiciendis sit nobis quidem fugit quo, laborum laudantium sint magni mollitia ipsa eaque debitis porro placeat ut, nulla vitae fuga tempora? Porro quo delectus ipsa, atque, culpa voluptatem temporibus hic quas, repudiandae sit molestias earum fuga. Exercitatione"
  );

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
        <small className="note-time">02-03-2024</small>
        <small> 01:03:34 PM</small>
      </div>
      <div className="complete-note-buttons">
      <button className="save-changes-btn">Save Changes</button>
      <button className="delete-note-btn">Delete Note</button>
      </div>
    </div>
  );
}

export default CompleteNote;
