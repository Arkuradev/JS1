import { API_GAMES_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateSingleItem } from "./generateSingleItem.mjs";

function getIdFromURL(){
const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const gameId = params.get("id");
  return gameId;

}

const descriptionContainer = document.querySelector('#description-container');

async function main() {
 const gameId = getIdFromURL();
 const gameData = await fetchData(`${API_GAMES_URL}/${gameId}`);
 const singleGameHtml = generateSingleItem(gameData);
 descriptionContainer.append(singleGameHtml);
 
}

main()