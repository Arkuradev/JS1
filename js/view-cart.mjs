const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-container');

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
    } else {
    cartContainer.innerHTML = `<h2>Your cart is empty.</h2>`
  }
}

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


// Rendering of the cart
viewCart();

