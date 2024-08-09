import axios from "axios";

async function fetchImages(searchQuery, page) {
  const API_KEY = "AFiJWsIcEf1H3o_hmcYl1oRrYm92hq0YKQ4QLix9MtU";
  const baseUrl = "https://api.unsplash.com/search/photos/";

  const params = new URLSearchParams({
    query: searchQuery,
    client_id: API_KEY,
    per_page: 12,
    page: page,
  });

  try {
    const response = await axios.get(`${baseUrl}?${params}`);
    const { results, total } = response.data;
    return { results, total };
  } catch (error) {
    console.log(error);
  }
}

export default fetchImages;
