function focus() {
    document.getElementsByTagName('div')[0].addEventListener(
        'focus',
        (e) => {
            e.target.parentElement.setAttribute('class', 'focused');
        },
        true
    );

    document.getElementsByTagName('div')[0].addEventListener(
        'blur',
        (e) => {
            e.target.parentElement.removeAttribute('class');
        },
        true
    );
}
