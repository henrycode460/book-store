import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
 import categoriesReducer from './categories/Categories.js';




const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer });


export default store;























