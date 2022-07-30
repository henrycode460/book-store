import { useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { addBook } from '../redux/books/Books';
import { FaPlusCircle } from 'react-icons/fa';

function InputBook() {
  const initFormState = {
    title: '',
    author: '',
  };

  const [book, setBook] = useState(initFormState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const resetForm = () => {
    setBook({ ...book, title: '', author: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = book;

    dispatch(addBook(title, author));
    resetForm();
  };


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add book..."
        name="title"
        value={book.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add author..."
        name="author"
        onChange={handleInputChange}
        value={book.author}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ fontSize: '20px', marginTop: '2px', color: 'black'  }}
        />
      </button>
    </form>
  );
}

export default InputBook;


















