import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// initialize logger
const loggerMiddleware = createLogger();

// apply logger to redux
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
