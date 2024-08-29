
// Renders each game in its own div container. 


export function generateSingleGame(game) {
  
  

  const gameListItem = document.createElement("li");
  gameListItem.classList.add("gameProduct");


  const gameLink = document.createElement("a");
  gameLink.href = `/game/?id=${game.id}`;

  // Game image
  const gameImage = document.createElement("img");
  gameImage.src = `${game.image}`;

  // Game title
  const gameTitle = document.createElement("h2");
  gameTitle.textContent = `${game.title}`;

  // Game price
  const gamePrice = document.createElement("p");
  gamePrice.textContent = `$${game.price}`;

  // Game description
  const gameDescription = document.createElement("p");
  gameDescription.textContent = `${game.description}`;

  // Game age rating
  const gameAgeRating = document.createElement("p");
  gameAgeRating.textContent = `${game.ageRating}`;

  // Game genre
  const gameGenre = document.createElement("p");
  gameGenre.textContent = `${game.genre}`;

  // Game year released
  const gameYearRelease = document.createElement("p");
  gameYearRelease.textContent = `${game.released}`;

  // If game is on sale
  const gameOnSale = document.createElement("p");
  gameOnSale.textContent = `${game.onSale}`;

// Appending content to the all games page. 
gameLink.appendChild(gameImage);
gameLink.appendChild(gameTitle);
gameLink.appendChild(gamePrice);

gameListItem.appendChild(gameLink);

return gameListItem;
}

