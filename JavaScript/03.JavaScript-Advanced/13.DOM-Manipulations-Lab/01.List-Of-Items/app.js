function addItem() {
    let items = document.getElementById('items');
    let inputText = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.textContent = inputText;
    items.appendChild(li);
}
