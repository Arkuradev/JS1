
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
}
