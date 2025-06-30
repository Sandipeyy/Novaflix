import axios from "axios";

const API_KEY = "76d6bb3cd65280309281489c42bc5dca";
const BASE_URL = "https://imdb-api.com/en/API";

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Top250Movies/${API_KEY}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const getTrendingTVShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Top250TVs/${API_KEY}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching trending TV shows:", error);
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/Title/${API_KEY}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
