let itemCount = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart(money) {
    itemCount++;
    cartCountElement.textContent = itemCount;
    updateTotalMoney(money)
}

let totalMoney = 0.00;
const cartTotalElement = document.getElementById('cart-total');

function updateTotalMoney(price) {
    totalMoney += price;
    cartTotalElement.textContent = totalMoney.toFixed(2);
}
