import React from 'react';
import { Route, Router, Routes } from 'react-router';
import Home from "./components/Home";
import NewNote from './components/NewNote'
import NoteContextProvider from './context/NoteContextProvider';
import CompleteNote from './components/CompleteNote';

function App() {
  return (
    <NoteContextProvider>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/new-note' Component={NewNote} />
    </Routes>
    {/* <CompleteNote /> */}
    </NoteContextProvider>
  );
}

export default App