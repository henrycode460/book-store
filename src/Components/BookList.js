import React from 'react';
import Book from './Book';

const BooksList = ({ books }) => (
  <>
    <ul>
      {Object.keys(books).map((book) => (
        <Book
          key={book}
          bookId={book}
          title={books[book][0].title}
          author={books[book][0].author}
        />
      ))}
    </ul>
  </>
);



export default BooksList;






