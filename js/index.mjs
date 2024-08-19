import { API_GAMES_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateGames } from "./generateGames.mjs";



async function main() {
  // Fetch games from API
  const games = await fetchData(API_GAMES_URL);
  // Generate HTML for all the games. 
  generateGames(games);
  
  
}

main();