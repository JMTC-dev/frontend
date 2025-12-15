import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect, useRef } = React;
const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
const utm = "?utm_source=scrimba_degree&utm_medium=referral";
const API_KEY = "NpRvp4rxQt7jYkbu95fWvCMrZKxyQKlWcNZfzeopGfI";

const loadData = (options) => {
  fetch(options.url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (options.onSuccess) {
        options.onSuccess(data);
      }
    });
};

const App = (props) => {
  let [photos, setPhotos] = useState([]);
};
