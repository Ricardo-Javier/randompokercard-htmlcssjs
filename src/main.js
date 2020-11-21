/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["club", "spade", "heart", "diamond"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let card = document.querySelector(".card");
  let cardValue = document.querySelector("h1");

  card.classList.add(suit[getRndInteger(0, suit.length - 1)]);
  cardValue.innerHTML = number[getRndInteger(0, number.length - 1)];
};
