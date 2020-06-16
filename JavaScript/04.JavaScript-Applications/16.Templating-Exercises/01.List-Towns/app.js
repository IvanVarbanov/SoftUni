const elements = {
    townsInput: () => document.getElementById('towns'),
    btnLoadTowns: () => document.getElementById('btnLoadTowns'),
    rootDiv: () => document.getElementById('root'),
};

let towns = '';

elements.btnLoadTowns().addEventListener('click', getTowns);

function getTowns(e) {
    e.preventDefault();
    const input = elements.townsInput().value;
    if (input) {
        towns = input.split(', ').map((el) => {
            return { name: el };
        });
    }

    // console.log(towns);

    renderHtml();
}

async function renderHtml() {
    try {
        let townsListHbs = await fetch('./towns-list.hbs').then((x) => x.text());
        let townHbs = await fetch('./town.hbs').then((x) => x.text());

        Handlebars.registerPartial('print_town', townHbs);

        let townsListCompiled = Handlebars.compile(townsListHbs);

        elements.rootDiv().innerHTML = townsListCompiled({ towns });
    } catch (error) {
        console.log(error);
    }
}
