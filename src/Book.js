import React from "react";

const Book = (props) => {
  const { img, title, author, price } = props;

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="cover img" />
      <h2>{title}</h2>
      <p>{props.children}</p>
      <em>
        <h3>By:- {author}</h3>
      </em>
      <p>Rs {price}</p>
    </article>
  );
};

export default Book;
