import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categoriesReducer);
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      {currentStatus}
    </>
  );
}
