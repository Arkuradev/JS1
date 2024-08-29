import { displayMessage } from "./common/displayMessage.mjs";

// Add a spinner function to this. Check explanation in module 5-6 video at 1:46.

export async function fetchData(url) {
  try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  const data = await response.json();
  return data;
  
  } catch (error) {
    console.error("Error fetching data:", error);
    displayMessage("#gamesSection", "error", "Error: Failed to fetch games");
  }

  throw error;
  
}

