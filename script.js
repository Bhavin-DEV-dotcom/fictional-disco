document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = ${item.name} - ₹${item.price.toFixed(2)};
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = Total: ₹${total.toFixed(2)};
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            cart.push({ name, price });
            updateCart();

            alert(${name} added to cart!);
        });
    });
});