import { Routes, Route } from 'react-router-dom';
import AccordionPractice from 'pages/AccordionPractice';
import AccordionPractice2 from 'pages/AccordionPractice2';
import Bingo from 'pages/Bingo';
import Home from 'pages/Home';
import Sample from 'pages/Sample';

export default function CreateRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/bingo" element={<Bingo />} />
      <Route path="/accordion" element={<AccordionPractice />} />
      <Route path="/accordion2" element={<AccordionPractice2 />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  )
}