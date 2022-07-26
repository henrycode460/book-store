const ADD_BOOKS = "bookstore/books/ADD_BOOKS"
const REMOVE_BOOKS =  "bookstore/books/REMOVE_BOOK"

export const Add_book = (books) =>{
  return {
    type: ADD_BOOKS,
    value: books
  }
}

export const Remove_book = (indexofbook) =>{
  return {
    type: REMOVE_BOOKS,
    value: indexofbook
  }
}


const initialBookState = {
  books : []

}

export default function bookReducer (state = initialBookState, action){
  switch(action.type){
    case 'ADD_BOOKS':
     return [...state, action.value];

      case 'REMOVE_BOOKS':
        return[
          ...state.slice(0, action.value),
          ...state.slice(action.value + 1, state.lenght - 1),
        ];
        default: 
        return state;
  }
}



