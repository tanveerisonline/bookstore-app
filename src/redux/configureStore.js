import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import books from './books/books';
import categories from './categories/categories';

const logger = createLogger();
const rootReducer = combineReducers({ books, categories });
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
