document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { id: 1, name: "product 1", price: 19.99 },
        { id: 2, name: "product 2", price: 29.99 },
        { id: 3, name: "product 3", price: 39.99 }

    ]

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMessage = document.getElementById('empty-cart')
    const cartTotalMessage = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkOutButton = document.getElementById('checkout-btn')

    renderCart()
    products.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span> 
        <button data-id="${product.id}">Add to cart
        </button>
        `
        productList.appendChild(productDiv)
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find(p => p.id === productId)
            addToCart(product);
        }
    })

    function addToCart(product) {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();

    }

    function renderCart() {
        cartItems.innerHTML = ""
        let totalPrice = 0
        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden")
            cartTotalMessage.classList.remove("hidden")

            cart.forEach((item, index) => {
                totalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button >Delete</button>`
                cartItem.querySelector('button').addEventListener('click', (e) => {
                    deleteItem(index)

                })
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`
            });
        } else {
            emptyCartMessage.classList.remove("hidden")
            const emptyMessage = document.createElement('p')
            emptyMessage.textContent = "Your cart is empty"
            cartItems.appendChild(emptyMessage)
        }
    }

    function deleteItem(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));

        renderCart();
        if (cart.length === 0) {
            cartTotalMessage.classList.add("hidden")
        }
    }

    checkOutButton.addEventListener('click', () => {
        cart.length = 0
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("CheckOut Successfully")
        totalPriceDisplay.textContent = `$0.00`
        renderCart()
    })
})