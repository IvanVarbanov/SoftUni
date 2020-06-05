async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsUl = document.getElementById('commits');

    try {
        let res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

        if (res.status !== 200) {
            throw res;
        }

        let data = await res.json();

        commitsUl.innerHTML = '';

        data.forEach((el) => {
            const li = document.createElement('li');
            li.textContent = `${el.commit.author.name}: ${el.commit.message}`;
            commitsUl.appendChild(li);
        });
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `${error.status} (${error.statusText})`;
        commitsUl.appendChild(li);
        console.log(error);
    }
}
