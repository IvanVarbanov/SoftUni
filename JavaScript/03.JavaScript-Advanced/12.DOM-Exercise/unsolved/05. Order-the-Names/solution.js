function solve() {
    let names = Array.from(document.querySelectorAll('ol li')).map((e) => e.textContent);
    document.getElementsByTagName('button')[0].addEventListener('click', (e) => {
        console.log(names);
    });
}
