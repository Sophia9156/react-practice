import { Routes, Route } from 'react-router-dom';
import AccordionPractice from 'pages/AccordionPractice';
import Bingo from 'pages/Bingo';
import Home from 'pages/Home';
import Sample from 'pages/Sample';
import Redux from 'pages/Redux';

export default function CreateRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/bingo" element={<Bingo />} />
      <Route path="/accordion" element={<AccordionPractice />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  )
}