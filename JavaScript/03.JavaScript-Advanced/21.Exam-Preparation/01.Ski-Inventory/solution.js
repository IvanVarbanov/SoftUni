function solve() {
    let filterBtn = document.querySelector('.filter button');
    let filter = document.getElementById('filter');

    let prdName = document.querySelectorAll('#add-new input')[0];
    let prdQty = document.querySelectorAll('#add-new input')[1];
    let prdPrice = document.querySelectorAll('#add-new input')[2];
    let addButton = document.querySelector('#add-new button');
    let productsList = document.querySelector('#products ul');

    let totalPriceH1 = document.getElementsByTagName('h1')[1];
    let myProductsUl = document.querySelector('#myProducts ul');
    let buyBtn = document.querySelector('#myProducts button');

    //Add to Client's List functions
    productsList.addEventListener('click', (e) => {
        if (e.target.type === 'submit') {
            console.log(e);

            let qty = e.path[2].querySelector('strong').textContent;
            let newQty = qty.split(' ').map((el) => {
                if (Number(el)) {
                    return Number(el) - 1;
                } else {
                    return el;
                }
            });

            if (newQty[1] > 0) {
                e.path[2].querySelector('strong').textContent = newQty.join(' ');
            } else {
                e.path[2].remove();
            }

            let name = e.path[2].querySelector('li span').textContent;
            let price = Number(e.path[2].querySelector('div strong').textContent);
            totalPriceH1.innerText = totalPriceH1.innerText
                .split(' ')
                .map((el) => {
                    if (el === '00.00') {
                        return price;
                    } else if (Number(el)) {
                        return (Number(el) + price).toFixed(2);
                    } else {
                        return el;
                    }
                })
                .join(' ');

            myProductsUl.innerHTML += `
                <li>
                    ${name} <strong>${price}</strong>
                </li>
                `;
        }
    });

    // Filtering function
    filterBtn.addEventListener('click', () => {
        let li = document.querySelectorAll('#products li');
        let filterText = filter.value;

        li.forEach((li) => {
            let name = li.querySelector('span').textContent;
            console.log(name);

            if (filterText && name.toLowerCase().includes(filterText) === false) {
                li.setAttribute('style', 'display: none;');
            } else {
                li.removeAttribute('style');
            }
        });
    });

    //Add product funtion
    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let name = prdName.value;
        let qty = prdQty.value;
        let price = prdPrice.value;

        if (name && qty && price) {
            productsList.innerHTML += `
            <li>
                <span>${name}</span>
                <strong>Available: ${qty}</strong>
                <div>
                    <strong>${price}</strong>
                    <button>Add to Client's List</button>
                </div>
            </li>
            `;
        }
    });

    //Buy funtion
    buyBtn.addEventListener('click', () => {
        totalPriceH1.innerText = 'Total Price: 0.00';
        myProductsUl.innerHTML = '';
    });
}
