import axios from "axios";

const API_KEY = "55227321-8aa875f9c6bbda7d6f4af2a1c";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}