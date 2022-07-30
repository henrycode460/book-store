import axios from "axios";
export default axios.create({
  baseURL: "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bk4RfFWHwBYFM4w3pl0R/books",
  headers: {
    "Content-type": "application/json"
  }
});
