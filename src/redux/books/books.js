import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks, addBooks, delBooks } from '../../api/Api';

const loadFromLocalStorage = () => {
  const serializedStore = window.localStorage.getItem('store');
  if (serializedStore === null) return undefined;
  return JSON.parse(serializedStore);
};

const extractBooks = () => {
  const storage = loadFromLocalStorage();
  return storage ? storage.books.booksList : {};
};

const initialState = {
  booksList: extractBooks(),
  msg: '',
  currentRequestId: '',
  loading: 'fin',
  error: '',
};

// Actions
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const fetchBooksList = createAsyncThunk(
  FETCH_BOOK,
  async (_, { rejectWithValue }) => {
    try {
      const resp = await getBooks();
      return resp;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

export const addBooksList = createAsyncThunk(
  ADD_BOOK,
  async (book, { rejectWithValue }) => {
    try {
      const resp = await addBooks(book);
      return resp;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

export const delBooksList = createAsyncThunk(
  REMOVE_BOOK,
  async (bookID, { rejectWithValue }) => {
    try {
      const resp = await delBooks(bookID);
      return resp;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

// Reducer
const { reducer } = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooksList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.booksList = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [fetchBooksList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [fetchBooksList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.booksList = payload;
        state.error = error;
      }
    },
    [addBooksList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.msg = 'New Book Added';
        state.resp = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [addBooksList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [addBooksList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.msg = payload;
        state.error = error;
      }
    },
    [delBooksList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.msg = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [delBooksList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [delBooksList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.msg = payload;
        state.error = error;
      }
    },
  },
});

export default reducer;
