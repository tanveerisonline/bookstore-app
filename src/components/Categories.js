import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import styles from './Categories.module.css';

const Categories = ({ Categories }) => {
  const dispatch = useDispatch();

  const check = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <main className={styles.categories}>
        <p>
          {Categories}
        </p>
        <button type="button" onClick={() => check()}>Check status</button>
      </main>
    </>

  );
};

Categories.propTypes = {
  Categories: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;
