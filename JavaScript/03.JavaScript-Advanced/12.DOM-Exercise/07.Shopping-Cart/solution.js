function solve() {
    let textarea = document.getElementsByTagName('textarea')[0];
    let product = Array.from(document.getElementsByClassName('product'));
    let productsInCart = new Set();
    let total = 0;

    product.forEach((product) => {
        // console.log(product);
        product.querySelector('.product-add').addEventListener('click', (e) => {
            if (true) {
                let productTitle = product.querySelector('.product-title').textContent;
                let productPrice = Number(product.querySelector('.product-line-price').textContent);
                productsInCart.add(productTitle);
                total += productPrice;
                textarea.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
            }
        });
    });

    document.querySelector('.checkout').addEventListener('click', () => {
        productsInCart = Array.from(productsInCart);
        textarea.value += `You bought ${productsInCart.join(', ')} for ${total.toFixed(2)}.`;
        Array.from(document.getElementsByTagName('button')).forEach((button) => {
            button.setAttribute('disabled', '');
        });
    });
}
