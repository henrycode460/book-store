import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

import bookReducer from './books/Books';
import checkStatusReducer from './categories/Categories';


const reducer = {
    books: bookReducer,
    categories: checkStatusReducer,
  };


const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;