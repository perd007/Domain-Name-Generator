/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  //genero los nombres de dominio

  let dominios = document.getElementById("dominios");
  let dominio;
  let contador = 0;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        contador = contador + 1;
        dominio = document.createElement("p");
        dominio.innerText = `${contador}- ${pronoun[i]}${adj[j]}${noun[k]}.com`;
        dominios.appendChild(dominio);
      }
    }
  }
};
