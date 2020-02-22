import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const key = "684a168c8e7f797395d8a1d5291bcabb";

export const fetchTrendingMovies = (page = 1) => {
  const url = `/3/discover/movie?sort_by=popularity.desc&api_key=${key}&perPage=2language=en-US&page=${page}&&include_adult=false&total_results=12&total_pages=10`;
  return axios.get(url).then(response => {
    console.log("====================================");
    console.log(response.data.results);
    console.log("====================================");
    response.data.results.forEach(item => {
      item.poster_path = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    });
    return response.data.results;
  });
};

export const fetchMovieByQuery = (query, page = 1) => {
  const url = `/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  return axios.get(url).then(response => response.data);
};
