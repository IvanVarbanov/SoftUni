function attachEvents() {
    const phonebookUl = document.getElementById('phonebook');
    const btnLoad = document.getElementById('btnLoad');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const btnCreate = document.getElementById('btnCreate');

    btnLoad.addEventListener('click', () => {
        loadPhoneList();
    });

    btnCreate.addEventListener('click', () => {
        let data = {
            person: person.value,
            phone: phone.value,
        };

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(() => {
            loadPhoneList();
            person.value = '';
            phone.value = '';
        });
    });

    function loadPhoneList() {
        phonebookUl.innerHTML = '<li>Loading</li>';

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then((x) => x.json())
            .then((res) => {
                if (res !== null) {
                    phonebookUl.innerHTML = '';
                    Object.entries(res).forEach((el) => {
                        if (typeof el[1] === 'object') {
                            const li = document.createElement('li');

                            const deleteBtn = document.createElement('button');
                            deleteBtn.textContent = 'Delete';
                            deleteBtn.addEventListener('click', () => {
                                deletePhone(el[0]);
                            });

                            li.innerHTML = `${el[1].person}: ${el[1].phone} `;
                            li.appendChild(deleteBtn);
                            phonebookUl.appendChild(li);
                        }
                    });
                } else {
                    phonebookUl.innerHTML = '<li>no numbers</li>';
                }
            });
    }

    function deletePhone(key) {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, { method: 'DELETE' }).then(() => {
            loadPhoneList();
        });
    }
}

attachEvents();
