// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};
// Cart Working JS
if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}
// Making function ready
function ready(){
//     Remove Item From Cart
    let reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for (let i = 0; i < reomveCartButtons.length; i++){
        const button = reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
//     Quantity Changes
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }
}

// Remove Items From Cart
function removeCartItem(event){
    const buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}
// Quantity Changes
function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
// Update Total
function updateTotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0];
    const cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++){
        const cartBox = cartBoxes[i]
        const priceElement = cartBox.getElementsByClassName('cart-price')[0];
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total= total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}