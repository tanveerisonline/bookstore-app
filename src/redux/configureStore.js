import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import booksReducer from './books/books';

const bookStore = configureStore({
  reducer: {
    categories: checkStatusReducer,
    books: booksReducer,
  },
});

export default bookStore;
