import { PropTypes } from 'prop-types';
import Book from './Book';
import NewBook from './NewBook';
import styles from './Books.module.css';

const Books = (props) => {
  const { BookList } = props;

  return (
    <>
      <main>
        <div className={styles.bookList}>
          {BookList.map((book) => (
            <Book
              key={book.item_id}
              author={book.author}
              title={book.title}
              item_id={book.item_id}
            />
          ))}
        </div>
        <NewBook />
      </main>
    </>
  );
};

Books.propTypes = {
  BookList: PropTypes.instanceOf(Array).isRequired,
};

export default Books;
