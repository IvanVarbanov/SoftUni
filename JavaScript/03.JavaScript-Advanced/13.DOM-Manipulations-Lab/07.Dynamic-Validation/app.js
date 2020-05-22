function validate() {
    let input = document.getElementById('email');

    let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

    input.addEventListener(
        'blur',
        () => {
            if (pattern.test(input.value)) {
                input.removeAttribute('class');
            } else {
                input.setAttribute('class', 'error');
            }
        },
        true
    );
}
