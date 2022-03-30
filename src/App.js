import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './routes/Home';
import Bingo from './routes/Bingo';
import AccordionPractice from './routes/AccordionPractice';
import AccordionPractice2 from './routes/AccordionPractice2';

function App() {
  return(
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/accordion" element={<AccordionPractice />} />
          <Route path="/accordion2" element={<AccordionPractice2 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
