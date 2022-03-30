import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Bingo from './routes/Bingo';
import AccordionPractice from './routes/AccordionPractice';
import Home from './routes/Home';

function App() {
  return(
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/accordion" element={<AccordionPractice />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
