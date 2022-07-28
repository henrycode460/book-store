import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import InputBook from './FormInput';
import BooksList from './BookList';

const Utilities = () => {
  const books = useSelector((state) => state.books, shallowEqual);
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