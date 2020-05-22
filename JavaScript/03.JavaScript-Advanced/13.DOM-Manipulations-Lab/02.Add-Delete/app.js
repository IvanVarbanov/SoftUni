function addItem() {
    let itemsList = document.getElementById('items');
    let inputValue = document.getElementById('newText').value;
    let li = document.createElement('li');
    li.innerHTML = `
    ${inputValue} .[<a href="#" class="delete-button">Delete</a>]
    `;
    itemsList.appendChild(li);

    itemsList.addEventListener('click', (e) => {
        if (e.target.textContent === 'Delete') {
            e.target.parentElement.remove();
        }
    });
}
