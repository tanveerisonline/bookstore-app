import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewBook from './AddNewBook';
import Book from './Book';
import { fetchBooksList } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);
  const { booksList } = books;
  const entries = Object.entries(booksList);

  useEffect(() => {
    if (Object.keys(booksList).length === 0) dispatch(fetchBooksList());
  }, [dispatch, booksList]);

  useEffect(() => {
    console.log(books);
    if (books.loading === 'fin') dispatch(fetchBooksList());
  }, [books.msg]);

  return (
    <div>
      <ul className="books">
        {entries.map((entry) => <li key={entry[0]}><Book entry={entry} /></li>)}
      </ul>
      <div className="horizontal-divider" />
      <AddNewBook />
    </div>
  );
};

export default Books;
