import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const RETRIEVE_BOOKS = "bookstore/books/RETRIEVE_BOOKS";
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
import BookService from '../../Services/Service.js';

const defaultState = {}; 
export default function booksReducer(state = defaultState, action) {
   const { type, payload } = action;
  switch (type) {
    case RETRIEVE_BOOKS:
      return payload;
      
    case ADD_BOOK:
      return {...state, payload};
     
      case REMOVE_BOOK:
       return Object.fromEntries(Object.entries(state).filter((book) => book[0] !== payload.id));
    default:
      return state;
  }
}

export const retrieveBook = () => async (dispatch) => {
  try {
    const res = await BookService.getAll();
    dispatch({
      type: RETRIEVE_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    throw new Error(err);
  }
}



export const addBook = (title, author) => async (dispatch) => {
const item_id= uuidv4();
    const category = null;
    const newBook = {
   
      item_id,
      title,
      author,
      category,
    };
    await BookService.add(newBook);
    dispatch({
      type: ADD_BOOK,
      payload: {
    
        item_id: [
          {
            title,
            author,
            category,
          },
        ],
      },
    });
  }

  export const removeBook = (id) => async (dispatch) => {
    
      await BookService.remove(id);
      dispatch({
        type: REMOVE_BOOK,
        payload: { id },
      });
    }












