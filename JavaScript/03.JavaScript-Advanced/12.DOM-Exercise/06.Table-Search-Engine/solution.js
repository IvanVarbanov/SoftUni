function solve() {
    document.getElementById('searchBtn').addEventListener('click', (e) => {
        let q = document.getElementById('searchField').value;
        document.getElementById('searchField').value = '';

        document.querySelectorAll('tbody tr').forEach((el) => {
            el.setAttribute('class', '');
        });

        if (q) {
            document.querySelectorAll('tbody tr').forEach((el) => {
                if (el.innerText.includes(q)) {
                    el.setAttribute('class', 'select');
                }
            });
        }
    });
}
