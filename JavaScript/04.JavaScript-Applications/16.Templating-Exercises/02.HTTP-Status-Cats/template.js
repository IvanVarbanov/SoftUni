(() => {
    async function renderCatTemplate() {
        try {
            let catHbs = await fetch('./cat.hbs').then((x) => x.text());
            let catsHbs = await fetch('./cats.hbs').then((x) => x.text());

            Handlebars.registerPartial('render_cat', catHbs);
            let catsCompiled = Handlebars.compile(catsHbs);

            const section = document.getElementById('allCats');

            section.innerHTML = catsCompiled({ cats });

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
    }

    renderCatTemplate();
})();
