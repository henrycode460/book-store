import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/Books';
import categoriesReducer from './categories/Categories.js';

const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;




















