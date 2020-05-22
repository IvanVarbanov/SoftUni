function deleteByEmail() {
    let query = document.getElementsByTagName('input')[0].value;
    let resultDiv = document.getElementById('result');

    document.querySelectorAll('td').forEach((td) => {
        if (td.textContent === query && td.textContent.includes('@')) {
            td.parentElement.remove();
            resultDiv.textContent = 'Deleted.';
        } else {
            resultDiv.textContent = 'Not found.';
        }
    });
}
