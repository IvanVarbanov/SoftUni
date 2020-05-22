function lockedProfile() {
    let main = document.getElementById('main');

    main.addEventListener('click', (e) => {
        if (e.target.parentNode.querySelectorAll('input')[1].checked === true) {
            if (e.target.localName === 'button') {
                if (e.target.previousElementSibling.hasAttribute('style')) {
                    e.target.previousElementSibling.removeAttribute('style');
                } else {
                    e.target.previousElementSibling.setAttribute('style', 'display: block');
                }

                if (e.target.textContent === 'Show more') {
                    e.target.textContent = 'Hide it';
                } else {
                    e.target.textContent = 'Show more';
                }
            }
        }
    });
}
