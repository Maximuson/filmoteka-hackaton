import * as API from "./services/movies-api";
// import Layout from "./Layout";
const app = {
  page: 1
};
const refs = {
  moviesList: document.querySelector("#movies-list"),
  buttonNext: document.querySelector(".next"),
  buttonPrev: document.querySelector(".prev"),
  paginationBoxInfo: document.querySelector(".pagination-box-info")
};

const getTrendingMovies = (page = app.page) => {
  page === 1 ? refs.buttonPrev.classList.add("hiddenButton") : null;
  API.fetchTrendingMovies(page)
    .then(data => {
      const films = data.reduce((acc, item) => {
        const { id, poster_path, title } = item;
        return (acc += `
          <li data-id="${id}" class="movie">
            <img class="poster" src="${poster_path}" />
            <h2 class="movie-title">${title}</h2>
            <div class="inner"></div>
            </li>
          `);
      }, "");
      console.log(films);
      // .insertAdjacentHTML("beforeend", films);
      document.querySelector("#movies-list").innerHTML = films;
    })
    .catch(err => console.log(err));
  refs.paginationBoxInfo.textContent = page;
};
getTrendingMovies();

const handleNext = () => {
  app.page = app.page + 1;
  getTrendingMovies(app.page);
  refs.buttonPrev.classList.remove("hiddenButton");
};
const handlePrev = () => {
  app.page = app.page - 1;
  getTrendingMovies(app.page);
  refs.buttonPrev.classList.remove("hiddenButton");
  app.page === 1 ? refs.buttonPrev.classList.add("hiddenButton") : null;
};

refs.buttonNext.addEventListener("click", handleNext);
refs.buttonPrev.addEventListener("click", handlePrev);

const getMoviesByQuery = query => {
  API.fetchMovieByQuery(query).then(data => {
    const films = data.reduce((acc, item) => {
      const { id, poster_path, title } = item;
      return (acc += `
            <li data-id="${id}" class="movie">
              <img class="poster" src="${poster_path}" />
              <h2 class="movie-title">${title}</h2>
              <div class="inner"></div>
              </li>
            `);
    }, "");
    console.log(films);
    // .insertAdjacentHTML("beforeend", films);
    document.querySelector("#movies-list").innerHTML = films;
  });
};

const handleChange = e => {
  const query = e.target.value;
  getMoviesByQuery(query);
};
