function loadRepos() {
    let username = document.getElementById('username').value;
    const reposListUl = document.getElementById('repos');
    reposListUl.innerHTML = '';

    fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((el) => {
                reposListUl.innerHTML += `
                <li>
                    <a href="${el.html_url}" target="blank">${el.full_name}</a>
                </li>`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
