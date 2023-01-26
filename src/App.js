import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// eslint-disable-next-line
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
