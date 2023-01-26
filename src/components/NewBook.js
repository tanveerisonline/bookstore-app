import uuid from 'react-uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const NewBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const readUserInput = (e) => {
    const input = e.target;
    setBook({
      ...book,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const id = uuid();
    if (book.title && book.author && book.category) {
      const newBook = {
        item_id: id,
        title: book.title,
        author: book.author,
        category: book.category,
      };
      e.target.reset();
      dispatch(postBook(newBook));
    }
  };

  return (
    <>
      <main>
        <h2>Add New Book</h2>
        <form onSubmit={submit}>
          <input type="text" id="title" name="title" onChange={readUserInput} placeholder="add title.." />
          <input type="text" id="author" name="author" onChange={readUserInput} placeholder="add author.." />
          <input type="text" id="category" name="category" onChange={readUserInput} placeholder="add category.." />
          <button type="submit">ADD BOOK</button>
        </form>
      </main>
    </>
  );
};

export default NewBook;
