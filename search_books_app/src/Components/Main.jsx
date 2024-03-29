import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
      setSearch("");
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            You're never alone when you're
            <br /> lost in a book.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              id="search"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
          <img src="./images/bg2.png" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}

export default Main;
