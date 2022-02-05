import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//! JSX RULES
//* Return only single elelent in form of div/section or fragment
//* use camel case for html attributes
//* use className instead of class
//* close every element
//* formatting

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
    alt=""
  />
);
const Title = () => (
  <h2
    style={{
      color: "yellowgreen",
      backgroundColor: "#404040",
      fontSize: "1.75rem",
    }}
  >
    Ikigai: The Japanese secret to a long and happy life
  </h2>
);

const Author = () => (
  <h3 style={{ backgroundColor: "#404040" }}>By:- Francesc Miralles</h3>
);
ReactDOM.render(<BookList />, document.getElementById("root"));
