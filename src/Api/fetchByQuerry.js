import axios from "axios";

const API_KEY = "63a74474f933eda5b8cc066d3494dc04";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function getByQuerry(querry) {
  try {
    const response = await axios.get(`${BASE_URL}?query=${querry}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2E3NDQ3NGY5MzNlZGE1YjhjYzA2NmQzNDk0ZGMwNCIsInN1YiI6IjY0ODZiMGMzYzAzNDhiMDExZmJkYzFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BkRWT5yob_WZgHbbPPNq-qgAcjbVt-Or65dfa93IL8Y",
        accept: "application/json",
      },
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}