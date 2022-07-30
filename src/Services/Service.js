import http from "../http-common";
const getAll = () => {
  return http.get();
};

const add = data => {
  return http.post("", data);
};

const remove = id => {
  return http.delete(`/${id}`);
};

const BookService = {
  getAll,
  add,
  remove,
  
};
export default BookService;
