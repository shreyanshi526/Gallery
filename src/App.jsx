import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Gallery from './gallery';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
