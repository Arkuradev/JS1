// GENERATE SINGLE GAME.MJS

export function generateSingleGame(game, showDetailedDescription = true) {

    const gameElement = document.createElement('div');
    gameElement.classList.add('game-item');
    
    // Injecting HTML inside gameSection on index.html. 
    // showDetailedDescription will hide the View Description link when the link has been clicked, also will display the detailed description information. 
    gameElement.innerHTML = `
      <img src="${game.image}" alt="Image" id="product-image">
      <h2>${game.title}</h2>
      ${!showDetailedDescription ? `<p>${game.description}</p>` : ''}
      ${!showDetailedDescription ? `<p><strong>Genre:</strong> ${game.genre}</p>` : ''}
      ${!showDetailedDescription ? `<p><strong>Age Rating:</strong> ${game.ageRating}</p>` : ''}
      ${!showDetailedDescription ? `<p><strong>Released:</strong> ${game.released}</p>` : ''}
      <p><strong>Price:</strong> $${game.price}</p>
      ${showDetailedDescription ? '<a href="/product/index.html?id=${game.id}" class="view-description">View Description</a>' : ''}
      
    
    `;
    
    if (showDetailedDescription) {
      const viewDescriptionLink = gameElement.querySelector('.view-description');
      viewDescriptionLink.addEventListener('click', (event) => {
        event.preventDefault();
        renderSingleGame(game);
      });
      }
      
      return gameElement;
    
    }

    ////////////////////////////////////////


    // Render Description 

    import { generateSingleGame } from "./generateSingleGame.mjs";

//Rendering a single game by clicking on the View Description link on the listed games page. 
// Will not display the view description link when reaching the product description page.   
  function renderSingleGame(game) {
    const gamesContainer = document.querySelector('#gamesSection');
  
    gamesContainer.innerHTML = '';
   
    const singleGameElement = generateSingleGame(game, false);
    gamesContainer.appendChild(singleGameElement);
  }

 export { renderSingleGame };

 //////////////////////////////////////////
 