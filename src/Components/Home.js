import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { retrieveBooks } from '../redux/books/Books';
import InputBook from './FormInput';
import BooksList from './BookList';

const Home = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBooks());
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

export {Home};