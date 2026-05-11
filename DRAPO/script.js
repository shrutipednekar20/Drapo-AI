let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
    updateCartCount();
}

function updateCartCount() {
    let count = cart.length;
    let el = document.getElementById("cart-count");
    if(el) el.innerText = count;
}

function loadCart() {
    let container = document.getElementById("cart-items");
    let total = 0;

    if(!container) return;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-item">
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function goToCheckout(){
    window.location.href = "checkout.html";
}

function placeOrder(){
    alert("Order placed! 🚀 Delivery in 60 minutes");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

updateCartCount();
loadCart();