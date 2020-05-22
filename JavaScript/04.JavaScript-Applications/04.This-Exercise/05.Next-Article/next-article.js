function getArticleGenerator(articles) {
    let contentDiv = document.getElementById('content');
    let counter = 0;
    return function () {
        if (counter < articles.length) {
            contentDiv.innerHTML += `
            <article>${articles[counter]}</article>
            `;
        }
        counter++;
    };
}
