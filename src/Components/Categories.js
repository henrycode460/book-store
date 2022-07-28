import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const check = () => dispatch(checkStatus());

  return (
    <div>
      <button type="button" onClick={check}>
        Check status
      </button>
      <h1>{status}</h1>
    </div>
  );
};

export default Categories;















