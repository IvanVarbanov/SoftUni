function attachEvents() {
    const messages = document.getElementById('messages');
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');
    const submit = document.getElementById('submit');
    const refresh = document.getElementById('refresh');

    refresh.addEventListener('click', () => {
        messages.textContent = 'Loading';
        fetch('https://rest-messanger.firebaseio.com/messanger.json')
            .then((x) => x.json())
            .then((res) => {
                messages.textContent = '';
                Object.entries(res).forEach((el) => {
                    messages.textContent += `${el[1].author}: ${el[1].content} \n`;
                });
            });
    });

    submit.addEventListener('click', () => {
        if (authorInput.value && contentInput.value) {
            let data = {
                author: authorInput.value,
                content: contentInput.value,
            };

            fetch('https://rest-messanger.firebaseio.com/messanger.json', {
                method: 'POST',
                body: JSON.stringify(data),
            }).then(() => {
                authorInput.value = '';
                contentInput.value = '';
            });
        }
    });
}
attachEvents();
