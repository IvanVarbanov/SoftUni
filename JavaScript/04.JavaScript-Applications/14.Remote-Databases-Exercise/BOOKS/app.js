const BASE_URL = 'https://books-js-advanced.firebaseio.com/';
const makeUrl = (param) => `${BASE_URL}${param}.json`;

const elements = {
    errorContainer: () => document.getElementById('error-message'),
    loadBooksBtn: () => document.getElementById('loadBooks'),
    thead: () => document.getElementById('thead'),
    titleInput: () => document.getElementById('title'),
    authorInput: () => document.getElementById('author'),
    isbnInput: () => document.getElementById('isbn'),
    addBtn: () => document.getElementById('add-book'),
};

elements.loadBooksBtn().addEventListener('click', loadAllBooks);

async function loadAllBooks(e) {
    try {
        let response = await fetch(makeUrl('books'));
        let data = await response.json();
        console.log(data);
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    let errorContainer = elements.errorContainer();
    errorContainer.style = 'display:block; color:red; text-align:center;';
    errorContainer.innerText = error;
}
