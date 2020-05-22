function growingWord() {
    let p = document.querySelector('#exercise p');

    if (p.hasAttribute('style')) {
        let style = p
            .getAttribute('style')
            .split('; ')
            .map((el) => el.split(': '));

        let size = Number(style[1][1].substring(0, style[1][1].length - 2)) * 2;
        let color = 'blue';
        if (style[0][1] === 'blue') {
            color = 'green';
        } else if (style[0][1] === 'green') {
            color = 'red';
        }
        p.setAttribute('style', `color: ${color}; font-size: ${size}px`);
    } else {
        p.setAttribute('style', 'color: blue; font-size: 2px');
    }
}
