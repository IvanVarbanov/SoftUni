import { contacts } from './contacts.js';

(async function () {
    const contactCardTemplate = await fetch('./contact_card.hbs').then((x) => x.text());
    const contactCardsTemplate = await fetch('./contact_cards.hbs').then((x) => x.text());

    Handlebars.registerPartial('print_contact', contactCardTemplate);

    let compiledTemplate = Handlebars.compile(contactCardsTemplate);

    document.body.insertAdjacentHTML('beforeend', compiledTemplate({ contacts }));

    const contactsDiv = document.getElementById('contacts');

    contactsDiv.addEventListener('click', (e) => {
        if (e.target.type === 'submit') {
            const detailsDiv = e.path['2'].querySelector('.details');
            if (detailsDiv.hasAttribute('style')) {
                detailsDiv.removeAttribute('style');
            } else {
                detailsDiv.setAttribute('style', 'display: block');
            }
        }
    });
})();
