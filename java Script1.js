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
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Iterate through cart items and display them in the cart.html page
    var cartContainer = document.getElementById('cart-container');

    cartItems.forEach(function(item) {
        var cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
        `;

        cartContainer.appendChild(cartItemDiv);
    });
});

function navigation(){
    var confirmation = confirm("Are you sure you want to log out?")
    if(confirmation){
        window.location.href = "Sign up.html";
    }
}
