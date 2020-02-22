import * as API from "./services/movies-api";
import Layout from "./Layout";
import mainPageList from "./templates/mainPageList.hbs";

const refs = {
  moviesList: document.querySelector(".movies-list"),
  buttonNext: document.querySelector(".next"),
  buttonPrev: document.querySelector(".prev"),
  paginationBoxInfo: document.querySelector(".pagination-box-info")
};

const getTrendingMovies = (page = 1) => {
  page === 1 ? refs.buttonPrev.classList.add("hiddenButton") : null;
  API.fetchTrendingMovies(page)
    .then(data => {
      //   createMarkup(data);
      console.log(data);
      Layout.render(mainPageList, "#movies-list", data);
      //   .replace(/ /g,'')
      //document.querySelectorAll(".article-image")
    })
    .catch(err => console.log(err));
  refs.paginationBoxInfo.textContent = page;
};
getTrendingMovies();
