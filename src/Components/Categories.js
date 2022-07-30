import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const showStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <h2>{categories}</h2>
      <button type="button" onClick={() => showStatus()}>Check status</button>
    </>
  );
}

export default Categories;















