import axios from "axios";

const API_KEY = "YOUR_RAWG_API_KEY";
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async () => {
  try {
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
}