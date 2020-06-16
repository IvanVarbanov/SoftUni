import { monkeys } from './monkeys.js';

(async () => {
    try {
        let monkeysHbs = await fetch('./monkeys.hbs').then((x) => x.text());
        let monkeyHbs = await fetch('./monkey.hbs').then((x) => x.text());

        Handlebars.registerPartial('print_monkey', monkeyHbs);

        let monkeysTemplate = Handlebars.compile(monkeysHbs);

        const section = document.getElementsByTagName('section')[0];

        section.insertAdjacentHTML('beforeend', monkeysTemplate({ monkeys }));

        section.addEventListener('click', (e) => {
            if (e.target.type === 'submit') {
                if (e.target.nextElementSibling.style.display === 'none') {
                    e.target.nextElementSibling.style.display = 'block';
                } else {
                    e.target.nextElementSibling.style.display = 'none';
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
})();
