import React from 'react'

function Note({heading, content, date, time}) {
  // const date =  new Date()
  return (
    <>
        <div className='note'>
            <h1>{heading}</h1>
            <p>{content} </p>
            <div className='note-time-details'>
            <small  className='note-time'>{date}</small> 
            <small> {time}</small>
            </div>
        </div>
    </>
  )
}

export default Note
