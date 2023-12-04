let itemCount = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart(money) {
    itemCount++;
    cartCountElement.textContent = itemCount;
    updateTotalMoney(money)
}

let totalMoney = 0.00; // Variable para almacenar el total del dinero
const cartTotalElement = document.getElementById('cart-total');

function updateTotalMoney(price) {
    // Actualizar el total del dinero al añadir un producto
    totalMoney += price;
    cartTotalElement.textContent = totalMoney.toFixed(2); // Ajustar el total a dos decimales
}
