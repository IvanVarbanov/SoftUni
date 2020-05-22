function solve() {
    let dropdownBtn = document.getElementById('dropdown');
    let dropdownUl = document.getElementById('dropdown-ul');
    let box = document.getElementById('box');

    dropdownUl.addEventListener('click', function (e) {
        box.style.background = e.target.innerText;
    });

    dropdownBtn.addEventListener('click', () => {
        if (dropdownUl.style.display === 'block') {
            dropdownUl.style.display = 'none';
            box.style.backgroundColor = 'black';
        } else {
            dropdownUl.style.display = 'block';
        }
    });
}
