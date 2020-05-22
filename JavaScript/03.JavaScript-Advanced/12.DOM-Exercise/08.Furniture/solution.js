function solve() {
    let buttonGenerate = document.getElementsByTagName('button')[0];
    let buttonBuy = document.getElementsByTagName('button')[1];
    let tbody = document.getElementsByTagName('tbody')[0];
    let textarea = document.getElementsByTagName('textarea');

    buttonGenerate.addEventListener('click', () => {
        let text = textarea[0].value;
        let tbody = document.getElementsByTagName('tbody')[0];
        let input = JSON.parse(text);
        // console.log(input);
        input.forEach((product) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>
                <img src="${product.img}" />
            </td>
            <td>
                <p class="product-name">${product.name}</p>
            </td>
            <td>
                <p class="product-price">${product.price}</p>
            </td>
            <td>
                <p class="product-decFactor">${product.decFactor}</p>
            </td>
            <td>
                <input type="checkbox" />
            </td>
            `;
            tbody.appendChild(tr);
        });
    });

    buttonBuy.addEventListener('click', () => {
        let text = textarea[1];
        let furnitures = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        let numProducts = 0;
        document.querySelectorAll('tbody tr').forEach((tr) => {
            let checkbox = tr.querySelector('input');
            if (checkbox.checked) {
                let name = tr.querySelector('.product-name').textContent;
                let price = Number(tr.querySelector('.product-price').textContent);
                let decFactor = Number(tr.querySelector('.product-decFactor').textContent);

                furnitures.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
                numProducts++;
            }
        });

        text.value = `
        Bought furniture: ${furnitures.join(', ')}
        Total price: ${totalPrice}
        Average decoration factor: ${(totalDecFactor / numProducts).toFixed(2)}
        `;
    });
}
