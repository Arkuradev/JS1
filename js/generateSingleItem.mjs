import { addToCart } from "./cart.mjs";

export function generateSingleItem(game) {
  const gameContainer = document.createElement('div');
  

  // Image of the selected game. 
  const gameImage = document.createElement('img');
  gameImage.src = game.image;

  // Game title
  const gameTitle = document.createElement('h2');
  gameTitle.textContent = game.title;

  // Game genre
  const gameGenre = document.createElement('p');
  gameGenre.textContent = `Genre: ${game.genre}`;

  // Price of selected game.
  const gamePrice = document.createElement('p');
  gamePrice.textContent = `Price: $${game.price}`

  // Description of selected game.
  const gameDescription = document.createElement('p');
  gameDescription.textContent = game.description;

  // Add to cart button with event listener to run addToCart() when clicked. 
  const gameAddToCartButton = document.createElement('button');
  gameAddToCartButton.addEventListener('click', function () {
    addToCart(game);
  })
  gameAddToCartButton.textContent = "Add to cart";

  gameContainer.append(gameImage, gameTitle, gamePrice, gameDescription, gameGenre, gameAddToCartButton);
  return gameContainer;

  
}