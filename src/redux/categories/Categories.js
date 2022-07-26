const CHECK_STATUS = 'CHECK STATUS';

export const checkStatus = () => ({
    type: CHECK_STATUS,
  });

export default function checkStatusReducer (state = [], action){
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}




















