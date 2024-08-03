import React, { useState } from 'react';

function CompleteNote() {
  
  const [noteText, setNoteText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel voluptas accusamus iste distinctio beatae numquam rerum earum ea animi? Incidunt dolores nihil laboriosam reiciendis sit nobis quidem fugit quo, laborum laudantium sint magni mollitia ipsa eaque debitis porro placeat ut, nulla vitae fuga tempora? Porro quo delectus ipsa, atque, culpa voluptatem temporibus hic quas, repudiandae sit molestias earum fuga. Exercitatione"
  );

  // Handle changes to the text area
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  return (
    <div className="complete-note-container">
      <h1>Heading</h1>
      <textarea
        value={noteText}
        onChange={handleChange}
      />
    </div>
  );
}

export default CompleteNote;
