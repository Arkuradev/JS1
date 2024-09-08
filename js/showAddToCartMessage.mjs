// Shows a message when the user clicks add to cart. 

export function showAddToCartMessage() {
  const messageElement = document.getElementById("add-to-cart-message");

  // Display the "Item added to cart" message
  messageElement.style.display = "block";

  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1500); // Removes the "Item added to cart" message after 1.5 seconds.
  
}

