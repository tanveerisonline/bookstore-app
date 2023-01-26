import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import styles from './App.module.css';
import { fetchBooks } from './redux/books/books';

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books BookList={state.books} />} />
          <Route path="/categories" element={<Categories Categories={state.categories} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
