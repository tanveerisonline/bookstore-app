import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addBooksList } from '../redux/books/books';

const Books = () => {
  const [formData, setFormData] = useState({
    item_id: uniqid(), title: '', author: '', category: 'Action',
  });

  const dispatch = useDispatch();
  const addBookObj = () => {
    if (formData.title !== '' || formData.author !== '') {
      dispatch(addBooksList(formData));
      setFormData({
        item_id: uniqid(),
        title: '',
        author: '',
        category: 'Action',
      });
    }
  };

  const options = [
    'Action', 'Science Fiction', 'Economy',
  ];
  const defaultOption = options[0];
  return (
    <section>
      <h2 className="form-title ">add new book</h2>
      <form onSubmit={(e) => { e.preventDefault(); addBookObj(); }} className="add-form">
        <input
          type="text"
          name="title"
          className="input title-input"
          placeholder="Add title"
          value={formData.title}
          onChange={(e) => setFormData((prevState) => ({ ...prevState, title: e.target.value }))}
        />
        <input
          type="text"
          name="author"
          className="input author-input"
          placeholder="Add author"
          value={formData.author}
          onChange={(e) => setFormData((prevState) => ({ ...prevState, author: e.target.value }))}
        />
        <Dropdown
          options={options}
          onChange={(e) => setFormData((prevState) => ({ ...prevState, category: e.value }))}
          value={defaultOption}
          placeholder="Select an option"
          className="input option-input"
        />
        <button type="submit" className="primary-button-big">
          add book
        </button>
      </form>
    </section>
  );
};

export default Books;
