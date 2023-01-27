import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import categoriesSlice from './categories/categories';

function saveToLocalStorage(store) {
  const serializedStore = JSON.stringify(store);
  window.localStorage.setItem('store', serializedStore);
}

const store = configureStore({
  reducer: { books: booksSlice, categories: categoriesSlice },
});
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
