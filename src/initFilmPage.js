import { fetchMovieTrailer } from "./services/movies-api";

const initMoviePage = movie => {
  const currentMovie = movie;

  const getMoviePage = () => {
    const {
      poster_path,
      title,
      vote_average,
      vote_count,
      popularity,
      original_title,
      overview,
      genres,
      id
    } = movie;

    const genresList = genres => {
      return genres.reduce((acc, item) => {
        return (acc += `<li class="genre-list--item"><span>${item.name}</span></li>\n`);
      }, "");
    };

    const getMovieTrailer = () => {
      fetchMovieTrailer(id).then(data => {
        document.querySelector(".js-main").insertAdjacentHTML(
          "afterbegin",
          `
            <iframe style="margin-bottom:50px" width="100%" height="450" src="https://www.youtube.com/embed/${data}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        `
        );
      });
    };
    getMovieTrailer();

    return `
    <div class="container">

    <section class="section" data-id="{id}">

      <div class="poster-wrapper">
        <img class="film-poster" src="${poster_path}" alt="poster image" />
      </div>
      <div class="description-wrapper">
      <h2 class="film-title">${title}</h2>
      <div class="vote-wrapper">
        <span class="titles vote-titles">vote / votes: </span>
        <span class="votes-numbers">${vote_average} / ${vote_count}</span>
      </div>
      <div class="popularity-wrapper">
        <span class="titles film-popularity">popularity: </span>
        <span class="popularity-score">${popularity}</span>
      </div>
      <div class="original-film-wrapper">
        <span class="titles original-film-titles">original title: </span>
        <span class="original-film-name">${original_title}</span>
      </div>
      <div class="film-genre-wrapper">
        <span class="titles film-genre">genre: </span>
        <ul class="genre-list">${genresList(genres)}</ul>
      </div>
      <h3>About</h3>
      <p class="film-description">
        ${overview}
      </p>
      <div class="button-wrapper">
        <button type="button" class="js-add-to-watched video-icon button-icon" data-id="${id}" data-action="watched-films">Add to
          watched</button>
        <button type="button" class="calendar-icon button-icon" data-id="${id}" data-action="queue-films">Add to
          queue</button>
      </div> 
    </section>
    </div>
    `;
  };
  document.querySelector(".searchWebsite").style.display = "none";
  let watchedFilms = localStorage.getItem("watched");
  if (!watchedFilms) {
    watchedFilms = [];
  } else {
    watchedFilms = JSON.parse(watchedFilms);
  }

  if (!watchedFilms) {
    localStorage.setItem("watched", []);
    watchedFilms = [];
  }
  let isFilmInWatched = watchedFilms.some(item => {
    return item.id === currentMovie.id;
  });

  document.querySelector(".js-main").innerHTML = getMoviePage();
  document.querySelector(".js-add-to-watched ").addEventListener("click", e => {
    if (!isFilmInWatched) {
      watchedFilms.push(currentMovie);
      localStorage.setItem("watched", JSON.stringify(watchedFilms));
      isFilmInWatched = true;
    }
  });
};
export default initMoviePage;
