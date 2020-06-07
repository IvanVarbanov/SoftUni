(() => {
    function handleError(e) {
        console.log(e);
    }
    const BASE_URL = 'https://fisher-game.firebaseio.com/catches/';
    const makeUrl = (param) => {
        if (param !== undefined) {
            return `${BASE_URL}${param}.json`;
        }
        return `${BASE_URL}.json`;
    };

    const elements = {
        loadButton: document.querySelector('.load'),
        addButton: document.querySelector('#addForm .add'),
        catches: document.getElementById('catches'),
    };

    elements.loadButton.addEventListener('click', loadAllCatches);
    elements.addButton.addEventListener('click', addCatch);
    elements.catches.addEventListener('click', (e) => {
        if (e.target.type === 'submit' && e.target.textContent === 'Update') {
            // console.log(e.path[1]);
            const htmlElement = e.path[1].cloneNode(true);
            const id = e.path[1].getAttribute('data-id');
            updateCatch(id, htmlElement);
        } else if (e.target.type === 'submit' && e.target.textContent === 'Delete') {
            // console.log(e.path[1].getAttribute('data-id'));
            const id = e.path[1].getAttribute('data-id');
            e.path[1].remove();
            deleteCatch(id);
        }
    });

    async function updateCatch(id, htmlElements) {
        const bodyData = {
            angler: htmlElements.querySelector('.angler').value,
            weight: htmlElements.querySelector('.weight').value,
            species: htmlElements.querySelector('.species').value,
            location: htmlElements.querySelector('.location').value,
            bait: htmlElements.querySelector('.bait').value,
            captureTime: htmlElements.querySelector('.captureTime').value,
        };

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        };

        try {
            const response = await fetch(makeUrl(id), options);
            if (!response.ok) {
                throw response;
            }
            const data = await response.json();
            // console.log(data);
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteCatch(id) {
        try {
            const response = await fetch(makeUrl(id), { method: 'DELETE' });
            if (!response.ok) {
                throw response;
            }
        } catch (error) {
            handleError(error);
        }

        console.log(response);
    }

    async function addCatch() {
        const myCatch = {
            angler: document.querySelector('#addForm .angler').value,
            weight: document.querySelector('#addForm .weight').value,
            species: document.querySelector('#addForm .species').value,
            location: document.querySelector('#addForm .location').value,
            bait: document.querySelector('#addForm .bait').value,
            captureTime: document.querySelector('#addForm .captureTime').value,
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myCatch),
        };

        try {
            const response = await fetch(makeUrl(), options);
            if (!response.ok) {
                throw response;
            }
            const data = await response.json();
            // console.log(data);
        } catch (error) {
            handleError(error);
        }
    }

    async function loadAllCatches() {
        try {
            const response = await fetch(makeUrl());
            if (!response.ok) {
                throw response;
            }
            const data = await response.json();
            // console.log(Object.entries(data));

            elements.catches.innerHTML = '';
            Object.entries(data).forEach((el) => {
                elements.catches.innerHTML += `
                <div class="catch" data-id="${el[0]}">
                    <label>Angler</label>
                    <input type="text" class="angler" value="${el[1].angler}" />
                    <hr />
                    <label>Weight</label>
                    <input type="number" class="weight" value="${el[1].weight}" />
                    <hr />
                    <label>Species</label>
                    <input type="text" class="species" value="${el[1].species}" />
                    <hr />
                    <label>Location</label>
                    <input type="text" class="location" value="${el[1].location}" />
                    <hr />
                    <label>Bait</label>
                    <input type="text" class="bait" value="${el[1].bait}" />
                    <hr />
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${el[1].captureTime}" />
                    <hr />
                    <button class="update">Update</button>
                    <button class="delete">Delete</button>
                </div>
                `;
            });
        } catch (error) {
            handleError(error);
        }
    }
})();
