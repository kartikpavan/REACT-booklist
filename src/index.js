import React from "react";
import ReactDOM from "react-dom";

//? CSS
import "./index.css";

//?  Components
import { books } from "./books";
import Book from "./Book";

//! JSX RULES
//* Return only single elelent in form of div/section or fragment
//* use camel case for html attributes
//* use className instead of class
//* close every element
//* formatting

const BookList = () => {
  return (
    <main>
      <h1>Top Selling Book List</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </main>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
