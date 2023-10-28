let countDate = new Date('13 July, 2023 00:00:00').getTime();

function CountDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = Math.floor(gap /(day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s= Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function() {
    CountDown()
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.addToCartBtn');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var productId = button.getAttribute('data-product-id');
            var productName = button.parentElement.querySelector('h3').innerText;
            var productQuantity = parseInt(button.parentElement.querySelector('input[type="number"]').value);
            var productPrice = parseFloat(button.parentElement.querySelector('.price').innerText);

            // Create a cart item object
            var cartItem = {
                id: productId,
                name: productName,
                quantity: productQuantity,
                price: productPrice
            };

            // Retrieve the existing cart items from localStorage or initialize an empty array
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            var existingItem = cartItems.find(item => item.id === productId);

            if (existingItem) {
                // If the product is already in the cart, update its quantity
                existingItem.quantity += productQuantity;
            } else {
                // If it's a new product, add it to the cart
                cartItems.push(cartItem);
            }

            // Save the updated cart items back to localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Redirect to the Cart.html page
            window.location.href = 'Cart.html';
        });
    });
});

function addToCart(){
    alert("The product has been added to the cart")
        }
        
function navigation(){
    var confirmation = confirm("Are you sure you want to log out?")
    if(confirmation){
        window.location.href = "sign up.html";
    }
}
