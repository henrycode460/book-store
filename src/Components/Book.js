import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { removeBook } from '../redux/books/Books'
import { useDispatch } from 'react-redux';


const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(id));

  return (
    <div className="container">
      <h3>{title}</h3>
      
      <h4>{author}</h4>
      <button type="button" onClick={deleteBook}>
        <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
      </button>
    </div>
  );
 
};



export {Book } ;








































































