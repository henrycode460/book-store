import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import InputBook from './FormInput';
import BooksList from './BookList';
import { retrieveBook } from '../redux/books/Books';

import { useEffect } from 'react';

const Utilities = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBook());
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <BooksList books={books} />
        <InputBook />
      </div>
    </div>
  );
};


export  {Utilities};