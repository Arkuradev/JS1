import { showAddToCartMessage } from "./showAddToCartMessage.mjs";

// Function to add a product to the cart. 
export function addToCart(game) {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    newCart.push(game);
    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(game);
    localStorage.setItem("cart", JSON.stringify(newCart));
    
  }
  showAddToCartMessage(); //Displays a message when user adds an item to the cart. 
}
