// src/api/imdb.js
import axios from "axios";

const API_KEY = "76d6bb3cd65280309281489c42bc5dca";
const BASE_URL = "https://imdb-api.com/en/API";

export const getMovieDetails = async (imdbId) => {
  try {
    const response = await axios.get(`${BASE_URL}/Title/${API_KEY}/${imdbId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
