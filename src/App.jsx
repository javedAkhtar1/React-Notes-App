import React from 'react';
import { Route, Router, Routes } from 'react-router';
import Home from "./components/Home";
import NewNote from './components/NewNote'

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/new-note' Component={NewNote} />

    </Routes>
  );
}

export default App