function solve() {
    let button = document.getElementsByClassName('link-1');
    Array.from(button).forEach((el) => {
        el.addEventListener('click', function add() {
            let text = el.lastElementChild.textContent.split(' ');
            text[1] = Number(text[1]) + 1;
            el.lastElementChild.textContent = text.join(' ');
        });
    });
}
