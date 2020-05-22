function addItem() {
    let dropdown = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.value = newItemValue;
    option.textContent = newItemText;
    dropdown.appendChild(option);
}
