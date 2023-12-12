const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("modal");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const addBookBtn = document.getElementById("add-book-btn");
const mainContainer = document.getElementById("main");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

function addNewBook(event) {
  event.preventDefault();

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    return;
  }

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;

  const book = bookFactory(title, author, pages);

  clearInput();
  closeModal();
  appendNewBook(book);
}

function bookFactory(title, author, pages) {
  return { title, author, pages };
}

function clearInput() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

function appendNewBook(book) {
  console.log(book);

  const article = document.createElement("article");
  article.classList.add("book");

  const h2 = document.createElement("h2");
  h2.classList.add("book-title");
  h2.textContent = book.title;

  const authorPara = document.createElement("p");
  authorPara.classList.add("book-author");
  authorPara.textContent = book.author;

  const pagesPara = document.createElement("p");
  pagesPara.classList.add("book-pages");
  pagesPara.textContent = book.pages;

  article.append(h2, authorPara, pagesPara);
  mainContainer.appendChild(article);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
addBookBtn.addEventListener("click", addNewBook);
