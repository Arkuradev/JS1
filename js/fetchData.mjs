import { displayMessage } from "./common/displayMessage.mjs";

export async function fetchData(url) {
  try {
    
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  const data = await response.json();
  return data;
  
  } catch (error) {
    displayMessage("#gamesSection", "error", "Error: Failed to fetch games from API");
  }

  throw error;
  
}

