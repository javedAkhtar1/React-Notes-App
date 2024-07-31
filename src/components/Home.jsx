import React, {useContext} from 'react'
import Note from './Note'
import {NewNoteContext} from '../context/NewNoteProvider'

function Home() {
    const {setAddNewNote} = useContext(NewNoteContext)
  return (
    <>
        <h1 className="main-heading">JNotes.</h1>
      <div className="notes-container">
        <Note />
        <button className="add-btn" onClick={() => setAddNewNote(true)}>Add new note</button>  
      </div>
    </>
  )
}

export default Home
