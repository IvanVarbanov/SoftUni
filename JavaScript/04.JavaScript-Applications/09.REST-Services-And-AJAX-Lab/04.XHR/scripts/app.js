function loadRepos() {
    const res = document.getElementById('res');
    let url = 'https://api.github.com/users/testnakov/repos';
    const httpRequest = new XMLHttpRequest();

    httpRequest.addEventListener('readystatechange', function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            res.textContent = httpRequest.responseText;
        }
    });

    httpRequest.open('GET', url);
    httpRequest.send();
}
