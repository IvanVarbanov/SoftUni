function solve() {
    let articleSection = document.querySelector('main section');
    let archiveSection = document.querySelector('.archive-section ul');
    let createBtn = document.getElementsByClassName('create')[0];

    //Archive & Delete
    articleSection.addEventListener('click', (e) => {
        if (e.target.innerText === 'Delete') {
            e.path[2].remove();
        } else if (e.target.innerText === 'Archive') {
            let title = e.path[2].children[0].innerText;
            e.path[2].remove();
            archiveSection.innerHTML += `<li>${title}</li>`;
            let arrayOfLi = Array.from(archiveSection.querySelectorAll('li')).sort((a, b) => {
                return a.innerText.localeCompare(b.innerText);
            });
            archiveSection.innerHTML = '';
            arrayOfLi.forEach((li) => {
                archiveSection.innerHTML += `
                <li>${li.innerText}</li>`;
            });
        }
    });

    //Create Article
    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let creator = document.getElementById('creator').value;
        let title = document.getElementById('title').value;
        let category = document.getElementById('category').value;
        let content = document.getElementById('content').value;

        articleSection.innerHTML += `
        <article>
            <h1>${title}</h1>
            <p>Category:
                <strong>${category}</strong>
            </p>
            <p>Creator:
                <strong>${creator}</strong>
            </p>
            <p>
                ${content}
            </p>
            <div class="buttons">
                <button class="btn delete">Delete</button>
                <button class="btn archive">Archive</button>
            </div>
        </article>`;
    });
}
