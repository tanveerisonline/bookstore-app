import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Nav from './Nav';
import Books from './Books';
import Categories from './Categories';
import Error from './Error';

const App = () => (
  <BrowserRouter>
    <div className="nav-bar">
      <>
        <Nav />
      </>
    </div>
    <div className="container">
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/books" replace />}
          />
          <Route
            path="/books"
            element={<Books />}
            exact
          />
          <Route
            path="/categories"
            element={<Categories />}
            exact
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
