"use strict";

const bookShelf = document.getElementById("container");
const plus = document.getElementById("btn_plus");
const btn_add = document.getElementById("button_bookadd");
const cancel = document.getElementById("button_cancel");
const form = document.getElementById("form");

let books = [];
function Book(titel, autor, seiten, gelesen) {
  this.titel = titel;
  this.autor = autor;
  this.seiten = seiten;
  this.gelesen = gelesen;
}

function addBookToLibrary(titel, autor, seiten, gelesen) {
  const newBook = new Book(titel, autor, seiten, gelesen);
  books.push(newBook);
  createHtml(newBook);
}

function formBook() {
  let titel = document.getElementById("titel").value;
  let autor = document.getElementById("autor").value;
  let seiten = document.getElementById("seiten").value;
  let gelesen = document.getElementById("gelesen").value;

  addBookToLibrary(titel, autor, seiten, gelesen);
}

function createHtml(newBook) {
  let neuesBuch = document.createElement("div");

  neuesBuch.innerHTML = `
            <div class="book" id="book">
                <h3>${neuesBuch.titel}</h3>
                <p>${neuesBuch.autor}</p>
                <p>${neuesBuch.seiten}</p>
                <p>${neuesBuch.gelesen}</p>
            </div>`;
  bookShelf.appendChild(neuesBuch);
}

plus.addEventListener("click", () => {
  form.classList.remove("hidden");
  console.log("test");
  // createHtml(newBook);
});
