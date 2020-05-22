function toggle() {
    let extra = document.getElementById('extra');
    let button = document.querySelector('.button');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
    } else {
        button.textContent = 'More';
    }

    if (extra.hasAttribute('style')) {
        extra.removeAttribute('style');
    } else {
        extra.setAttribute('style', 'display: block');
    }
}
