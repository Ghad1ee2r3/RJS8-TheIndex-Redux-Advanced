import React, { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";
import { useParams } from "react-router-dom";
import {connect} from "react-redux";

const BookList = props => {
  const [query, setQuery] = useState("");

  const filterBooks = () => {
    return props.books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const bookColor = useParams().bookColor;
  let books = filterBooks();

  if (bookColor) {
    books = books.filter(book => book.color === bookColor);
  }

  return (
    <div>
      <h3>Books</h3>
      <SearchBar onChange={setQuery} />
      <BookTable books={books} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    books: state.books.books,
  }
};

export default connect(mapStateToProps)(BookList);