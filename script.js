"use strict";
const text = document.querySelector("#text");

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  window.location.reload();
});

async function getQuote() {
  const results = await fetch("https://api.kanye.rest");
  const data = await results.json();
  text.innerText = `${data.quote} \n\n\n\ - Kanye West`;
}

getQuote();
