/* eslint-disable camelcase */
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ewYk4YjZVq8pYtMAfktj/books';

// action types
const ADD = 'BOOK_ADDED';
const REMOVE = 'BOOK_REMOVED';
const READ = 'BOOKS_RETRIEVED';

// Action creators
export const addBook = ({
  item_id, title, author, category,
}) => ({
  type: ADD,
  item_id,
  title,
  author,
  category,
});

export const removeBook = (item_id) => ({
  type: REMOVE,
  item_id,
});

export const readBooks = (books) => ({
  type: READ,
  books,
});

const getFromAction = ({
  item_id, title, author, category,
}) => ({
  item_id, title, author, category,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getFromAction(action),
      ];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.item_id);

    case READ:
      return action.books;

    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  await fetch(URL)
    .then((res) => res.json())
    .then((books) => {
      const BookList = [];
      Object.keys(books).forEach((key) => {
        BookList.push({
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        });
      });
      dispatch(readBooks(BookList));
    });
};

export const postBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(addBook(book));
    });
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(removeBook(id));
    });
};

export default booksReducer;
