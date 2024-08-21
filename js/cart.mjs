
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
const getCartTotalButton = document.querySelector("#cart-total-button");
getCartTotalButton.addEventListener('click', () => console.log(getCartTotal()));

export function getCartTotal() {
  let totalCost = 0;
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    const newCart = JSON.parse(cart);
    for (let i = 0; i < newCart.length; i++) {
      totalCost = totalCost + newCart[i].price;
    }
  }
  return totalCost;
}