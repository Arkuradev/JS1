const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-container');
const checkoutContainer = document.getElementById('checkout-container');

function viewCart() {
  if(cartItems.length > 0) {
    cartContainer.innerHTML = ''; // Clear cart before rendering items. 

    cartItems.forEach((item, index) => {
      const itemDiv = document.createElement('div');

      itemDiv.innerHTML = `
      <div class="product-container">
      <img src="${item.image}">
      <div class="game-info">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      </div>
      <p>Age rating: ${item.ageRating}</p>
      <p>Price: $${item.price}</p>
      <button class="remove-btn" data-index="${index}">Remove from cart</button>
      </div>
      `;
      cartContainer.appendChild(itemDiv);
    });
    // Update total price
    updateTotalPrice();

    } else {
    cartContainer.innerHTML = `<h2>Your cart is empty.</h2>`
    checkoutContainer.innerHTML = "";
  }
}


// Function to update the total price with 2 decimals if any. 
function updateTotalPrice() {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  checkoutContainer.innerHTML = `
  <div>  
  <p>Total Price: $${totalPrice.toFixed(2)}</p>
  <button id="checkout-btn">Purchase</button>
  </div>
  `
}

// Event listener to complete the purchase. 
checkoutContainer.addEventListener('click', function(event) {
  if(event.target.id === 'checkout-btn') {
    window.location.href = '/checkout/confirmation/order-confirmation.html';
    localStorage.clear();
  }
})


// Function to remove an item from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1); // Removes the item from the array. 
  localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
  viewCart(); // Render the cart
}

// Event listener for the "remove" button. 
cartContainer.addEventListener('click', function(event) {
  if(event.target.classList.contains('remove-btn')) {
    const index = event.target.getAttribute('data-index');
    removeFromCart(index);
  }
})



// Calling the viewCart function.
viewCart();

