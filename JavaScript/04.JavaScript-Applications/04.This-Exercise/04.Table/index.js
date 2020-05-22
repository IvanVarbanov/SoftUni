function solve() {
    let table = document.querySelector('.minimalistBlack tbody');

    table.addEventListener('click', function (e) {
        this.querySelectorAll('tr').forEach((tr) => {
            if (tr.innerText !== e.path[1].innerText) {
                tr.removeAttribute('style');
            } else {
                if (tr.style.background) {
                    tr.removeAttribute('style');
                } else {
                    tr.style.background = '#413f5e';
                }
            }
        });
    });
}
