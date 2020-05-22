function createArticle() {
    let input = document.getElementById('createTitle').value;
    let text = document.getElementById('createContent').value;

    if (input && text) {
        let articleSection = document.getElementById('articles');
        let createArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        p.textContent = text;
        h3.textContent = input;
        createArticle.appendChild(h3);
        createArticle.appendChild(p);
        articleSection.appendChild(createArticle);
        document.getElementById('createTitle').value = '';
        document.getElementById('createContent').value = '';
    }
}
