import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const checkState = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <div className="category"><span>{categories}</span></div>
      <div>
        <button className="primary-button" type="button" onClick={() => checkState()}>Check status</button>
      </div>
    </>
  );
};

export default Categories;
