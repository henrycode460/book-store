import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';
import './book.css'

const Book = ({ bookId, title, author }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => dispatch(removeBook(id));

  return (
    <div className='main-container'>
    <div className="main-wrapper">

      <div className='upper-book'>
      <h3 className='categories-style'>Software</h3>
      <h3 className='book-title'>{title}</h3>
      <h3 className='book-author'>{author}</h3>
      <div className='middle-book'>
      <button type="button" className='book-btn' >
        Comments
      </button>
      <div className='vertical-line'></div>
      <button className='book-btn' type="button" onClick={() => deleteBook(bookId)}>
        Remove
      </button>
      <div className='vertical-line'></div>
      <button type="button" className='book-btn' >
        Edit
      </button>

      </div>
    
      </div>

<div className="Progress-Container">

<div className="circle-wrap">
  <div className="circle">
    <div className="mask full">
      <div className="fill" />
    </div>
    <div className="mask half">
      <div className="fill" />
    </div>
    <div className="inside-circle" />
  </div>
</div>

<div className="Progress-Detail">
  <span className="-Percent-Complete">
    75%
  </span>
  <span className="Completed Text-Style-2">
    Completed
  </span>
</div>
</div>

<div className='vertical-line-two'></div>


<div className='button-div'>
  <h4 className='button-div-heading'>CURRENT CHAPTER</h4>
  <h5 className='button-div-middle-txt'>Chapter 10</h5>
 
<button className='button-div-btn' >UPDATE PROGRESS</button>
</div>



     
    </div>
    
    </div>
  );
};



export default Book;






































































