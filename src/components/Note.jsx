import React from 'react'

function Note() {
  const date =  new Date()
  return (
    <>
        <div className='note'>
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste dolore eaque praesentium asperiores veniam suscipit quas doloremque sunt tenetur a. Omnis molestias itaque quis est ex mollitia fuga porro ab, corrupti quaer Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis consequuntur veritatis incidunt dolores corrupti nihil ut quod autem laboriosam? </p>
            <div className='note-time-details'>
            <small  className='note-time'> {date.toLocaleDateString()}</small> 
            <small> {date.toLocaleTimeString()}</small>
            </div>
        </div>
    </>
  )
}

export default Note
