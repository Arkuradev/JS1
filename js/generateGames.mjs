import { generateSingleGame } from "./generateSingleGame.mjs";

function generateGames(games) {
  for (let i = 0; i < games.length; i++) {
    const singleGame = generateSingleGame(games[i]);
    console.log(singleGame) 
  }
};

export { generateGames };

