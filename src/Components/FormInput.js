import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/Books';
import './inputForm.css'


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
    <>
    <div> 
    <div className='vertical-line-three'></div>
    <h2 className="form-title">ADD NEW BOOK</h2>
    </div>
    <div> 
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field input-field-one"
        placeholder="Add book..."
        name="title"
        value={book.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Add author..."
        name="author"
        value={book.author}
        onChange={handleInputChange}
      />
      <button type="submit" className="submit-btn">ADD BOOK</button>
    </form>
    </div>
    </>
  );
}

export default InputBook;