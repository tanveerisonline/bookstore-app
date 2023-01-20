import React from 'react';

export default function AddBook() {
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <select key="author">
          <option value="Category">all authors</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
