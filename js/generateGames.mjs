import { generateSingleGame } from "./generateGameCards.mjs";

function generateGames(games) {
  const gamesContainer = document.querySelector('#gamesSection');
  for (let i = 0; i < games.length; i++) {
    const singleGame = generateSingleGame(games[i]);
    gamesContainer.appendChild(singleGame);
  }
};

export { generateGames };

