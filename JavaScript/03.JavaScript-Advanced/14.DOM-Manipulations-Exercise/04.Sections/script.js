function create(words = []) {
    let content = document.getElementById('content');
    words.forEach((word) => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.setAttribute('style', 'display: none');
        p.textContent = word;
        div.appendChild(p);
        content.appendChild(div);
    });

    content.addEventListener('click', (e) => {
        if (e.target.localName === 'div') {
            e.target.firstChild.removeAttribute('style');
        }
    });
}
