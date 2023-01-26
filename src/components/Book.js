/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = (props) => {
  const { item_id, title, author } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    <div className={styles.book}>
      <div>
        <h2>
          {title}
        </h2>
        <h3>
          {author}
        </h3>
      </div>
      <button className={styles.removeBtn} type="button" onClick={handleRemoveBook}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
